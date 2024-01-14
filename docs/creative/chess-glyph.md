---
slug: chess-glyph
title: Chess Glyph
description: Abstract chess game diagram.
---

Visually represent any recorded chess game (`PGN` format). Sequences of moves can be displayed as traces and interactions (capture, check, piece, castleing, etc.) can be represented stylistically. The shapes and geometry are manipulated with `shapely`. The code modularity allows to style the output with flexibility. Then, the page layout and the `.svg` files are created using `vpype` and `vsketch`. Finally, a few files were plotted using a Uunatek iDraw A4.

<div class="flex">
    <div class="w-1/2">
        <img src="/img/docs/chess_viz.jpg"/>
    </div>
    <div class="w-1/2">
        <img src="/img/docs/chess_viz2.jpg"/>
    </div>
</div>

```python title="Snippet of ChessVizSketch class"
class ChessVizSketch(vsketch.SketchClass):
    # Sketch parameters:
    data_path = Path("./data/deepblue_kasparov_1997")
    data_files = [x for x in data_path.iterdir() if x.is_file()]
    games = file_parser("./data/Alekhine-Best-Games (1)/Alekhine Best Games.pgn")

    scale = vsketch.Param(30)
    top_margin = vsketch.Param(100)
    left_margin = vsketch.Param(0)
    vertical_spacing = vsketch.Param(300)
    horizontal_spacing = vsketch.Param(300)
    title_x = vsketch.Param(0)
    title_y = vsketch.Param(0)
    occlude = vsketch.Param(False)
    

    def draw(self, vsk: vsketch.Vsketch) -> None:
        vsk.size("9inx12in", landscape=False, center=True)

        layout = grid_layout(2, 3, self.horizontal_spacing, self.vertical_spacing)
        
        # display games
        with vsk.pushMatrix():
            vsk.translate(self.left_margin, self.top_margin)
            for idx, pos in enumerate(layout[:5]):
                with vsk.pushMatrix():
                    vsk.translate(pos[0], pos[1])                   
                    viz = ChessViz(self.games[idx])
                    viz.generate_traces()
                    lines, points, polygons = viz.get_shapes()

                    for line in lines:
                        line = affine_transform(line, [self.scale, 0, 0, self.scale, 0, 0])
                        vsk.geometry(line)

                    for point in points:
                        point = affine_transform(point, [self.scale, 0, 0, self.scale, 0, 0])
                        vsk.circle(point.x, point.y, radius=5)
                        
                    for poly in polygons:
                        poly = affine_transform(poly, [self.scale, 0, 0, self.scale, 0, 0])
                        vsk.geometry(poly)

                    # display player names
                    player_name(vsk, viz.metadata["Black"],
                                x=pos[0] + self.left_margin + self.scale*3.5,
                                y=pos[1] + self.top_margin - self.scale*0.6)
                    player_name(vsk, viz.metadata["White"],
                                x=pos[0] + self.left_margin + self.scale*3.5,
                                y=pos[1] + self.top_margin + self.scale*7.6)                  
                    
                    # display results
                    results(vsk, viz.metadata["Result"],
                            x=pos[0] + self.left_margin + self.scale*3.5,
                            y=pos[1] + self.top_margin + self.scale*8.3)

        # display title
        header(vsk, "Alexander Alekhine X", vsk.width/3.2, self.title_y)
        subheader(vsk, viz.metadata["Site"], vsk.width/3.2, self.title_y+30)
        subheader(vsk, viz.metadata["Date"][:4], vsk.width/3.2, self.title_y+60)
        
        if self.occlude:
            vsk.vpype("occult")

    def finalize(self, vsk: vsketch.Vsketch) -> None:
        vsk.vpype("linesimplify occult linemerge linesort")


if __name__ == "__main__":
    ChessVizSketch.display()
```