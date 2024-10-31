# Setting up Taskwarrior 3.0 server

Taskwarrior is a command line tool to manage tasks. I used it daily with its Timewarrior integration to track time spent on tasks and projects.

This post shares my journey upgrading to Taskwarrior 3 and setting up the sync server. I'll had the most details possible to help anyone else looking to do the same.

## Some context

I mostly use Taskwarrior from my desktop machine, but I also use it on my laptop when traveling or working from a coffee shop. At home, I have a low-power computer running at all times, hosting several services, including the Taskwarrior sync server. 

## Upgrade to Taskwarrior 3

As of today, the official Taskwarrior documentation points to [these instructions](https://github.com/GothenburgBitFactory/taskwarrior/blob/develop/doc/devel/contrib/development.md). The steps are:

1. Back up existing Taskwarrior data (`<3.0`)

    ```bash
    task export > ~/taskwarrior-backup.json
    ```

2. install the requirements (CMake, Rust, etc.)
3. download and extract the release, and move to the project directory

    ```bash
    wget https://github.com/GothenburgBitFactory/taskwarrior/releases/download/v3.1.0/task-3.1.0.tar.gz
    tar xzvf task-3.1.0.tar.gz
    cd task-3.1.0
    ```

4. build the `task` executable

    ```bash
    cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
    cmake --build build --target task_executable
    ```

5. install the project

    ```bash
    sudo cmake --install build
    ```

6. Check your installation

    ```bash
    task version
    ```

7. restore the data from your backup

    ```bash
    task import rc.hooks=0 ~/taskwarrior-backup.json
    ```

## Deploy server container

The server is available through the [TaskChampion Sync-Server repository](https://github.com/GothenburgBitFactory/taskchampion-sync-server). The `README` gives good instructions on how to use the provided `Dockerfile` to build the image and run the container locally. One thing you might miss is the [Packages section](https://github.com/GothenburgBitFactory/taskchampion-sync-server/pkgs/container/taskchampion-sync-server), which hosts pre-built images on GitHub container registry.

In my case, I want to run the server on [Portainer](https://www.portainer.io/) which adds some steps and considerations that I'll detail.

1. Under `Volumes`, add a new volume for your Taskwarrior data
2. Under `Containers`, add a new container
    
    1. Set the container name
    2. For the registry, select advanced mode and paste the container image URL from the [Packages section](https://github.com/GothenburgBitFactory/taskchampion-sync-server/pkgs/container/taskchampion-sync-server). For example: 
        
        ```
        ghcr.io/gothenburgbitfactory/taskchampion-sync-server:main
        ```
    3. Manual configure a host port to the container port 8080. Remember this port for your client configuration.
    4. Map the host volume defined in Portainer to the container's defined volume. This is hardcoded in the image and is currently
    
        ```
        /var/lib/taskchampion-sync-server
        ```
    5. Deploy the container


## Configure the client

Now that your server is running, you need to configure your client, which must be using Taskwarrior `>=3.0`. Minimally, you have to set the server URL and the client id. This can be done via `task config`.

The `$HOST` is the hostname or IP of your server, in this case the Portainer host.

The `$PORT` must match the host port of your container. In version `<3.1`, the config is `sync.server.origin`, but in version `>=3.1`, the config is `sync.server.url`

```bash
task config sync.server.url http://$HOST:$PORT
```

The `$CLIENT_ID` should uniquely identify a client. A UUID or a cryptographic hash is ideal. You will need to set this client id on all clients that connect to the same Taskwarrior data (e.g., desktop, laptop, phone). By using different client ids, you can have multiple users on the server or keep Taskwarrior data isolated.

```bash
task config sync.server.client_id $CLIENT_ID
```

(Optional) Set the `$ENCRYPTION_SECRET` to encrypt the data on the server. You will need to set this secret on all clients that connect to the same Taskwarrior data.

> NOTE. The config path is `sync.` instead of `sync.server.`
```bash
task config sync.encryption_secret $ENCRYPTION_SECRET
```

To check your installation, run this command and voilà!

```bash
task sync
```

Now, set the same client configuration on your other devices (`url`, `client_id`, `encryption_secret`) and they should all be in sync. 

### Configure via `.taskrc`

Also, note that you can directly configure the client via the `.taskrc` file. The `task config` command simply sets values there. This can be an effective solution to set up multiple clients.
```bash
nano ~/.taskrc
```

```nano
# Here is an example of entries that use the default, override and blank values
#   variable=foo   -- By specifying a value, this overrides the default
#   variable=      -- By specifying no value, this means no default
#   #variable=foo  -- By commenting out the line, or deleting it, this uses the default

sync.server.client_id=...
sync.encryption_secret=...
sync.server.url=...
```

## Next steps

- Automate client syncing
    - Use Linux's `cron` feature ([reference](https://www.redhat.com/en/blog/linux-cron-command))
    - Use Taskwarrior hooks ([reference](https://taskwarrior.org/docs/hooks2/))
- Set up Timewarrior integration on all clients ([reference](https://timewarrior.net/docs/taskwarrior/))
    - Note. The clients need Timewarrior to generate time entries, but the Taskwarrior server does not need Timewarrior.
