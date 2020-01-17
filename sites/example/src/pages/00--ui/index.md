---
title: User Interface
author: "Stefan Huber"
date: "2017-02-15"
layout: post
draft: false
hideInMenu: false
path: "/ui/"
tags:
  - "TagOne"
  - "TagTwo"
description: ""
---

import Margin from 'gatsby-theme-signalwerk/src/components/Margin';
import Grid from 'gatsby-theme-signalwerk/src/components/Grid';
import Column from 'gatsby-theme-signalwerk/src/components/Column';
import Box from 'gatsby-theme-signalwerk/src/components/Box';

CAS Arts & Design in Practice · Signalwerk GmbH – Stefan Huber · 2017


## Content
```toc
exclude:
  - Content
from-heading: 2
to-heading: 2
```


## Intro
The aim of the design was to build a single screen user interface with no switching between windows or overlays. All the interaction should be context sensitive and offer as less options as possible and as many as necessary. Noting like selecting a tool is required. All the interaction is just with the normal pointer and additional functions are added with key combinations. The interface is targeted at professional users.  

*Warning: All pictures are scaled. Click on it to see the original file.*

<Grid background>


[![Overview](./sketch/Select.png)](./sketch/Select.png)
*Overview of the GUI*

</Grid>




## Drawing


There are two kind of drawing modes. The outline based editing is well known by regular vector drawing programs like Illustrator or Inkscape. In addition to that there will be a stroke based drawing ((not planned for the first beta)). This model is similar to the approach of [prototypo](https://www.prototypo.io/). The centerline is defined by stroke points. Those points extend to the outer shape of the glyph.



<Grid>
<Column start="1" end="7">
<Box line>

[![status](./sketch/a_anchor.png)](./sketch/a_anchor.png)

</Box>

*Point Editing for contours*

</Column>
<Column start="7" end="13">
<Box line>

[![status](./sketch/a_skelet.png)](./sketch/a_skelet.png)

</Box>

*Brush Editing for strokes*

</Column>
</Grid>

## Parts
The GUI consists of the following parts:

* Art board
* Palette
* Menu bar
* Status bar

### Art board
The visual representation of the drawing is visible on the artboard. The default mouse behaviour (tool) is to select and move points. If the control-key is held down it is possible to draw a path.  
((no zoom/move planned for the first beta))

Hold down x-key to see a proof view of the glyph.

<Grid background>
<Column start="1" end="9">

[![drawing](./sketch/drawing.png)](./sketch/drawing.png)
*Art board without a selection*

</Column>
<Column start="9" end="13">

<Box backgroundColor="white">

[![Proofview](./sketch/drawing_proof.png)](./sketch/drawing_proof.png)

</Box>

*Proof view*

</Column>
</Grid>




---

### Palette

The Palette changes it's content depending on the selection on the art board. The importance and usage of the different input fields are decreasing from top to down.
Always (even if not visible on the sketches) at the very bottom in all context there will be the section with the variables.


<Box maxWidth="60">

[![Palette](./sketch/Palette_Select.png)](./sketch/Palette_Select.png)
*Palette with a selected point in the art board*

</Box>


---

### Menu bar
The menu bar offers usually non context-sensitive data.

<Grid>

[![menu](./sketch/menu.png)](./sketch/menu.png)
*Menu bar*

</Grid>

#### Items
* Import ((not planned for the first beta))
* Export ((not planned for the first beta))

---

### Status bar


The status bar shows general informations to the current status of the editing.

<Grid>

[![status](./sketch/status.png)](./sketch/status.png)
*Status bar*

</Grid>

#### Information
* x-Position of the mouse pointer
* y-Position of the mouse pointer
* total count of contours in the glyph
* total count of points in the glyph

---

## Colour palette
The colours of the whole GUI are in a dark tone only the art board has a white background to have a contrast between the functional interface and the visual representation.

The following colours have an extended colour encoding:
* Cyan: path geometry (glyph, contour, point)
* Red: current active
* Orange: variables

[![colours](./sketch/colours.png)](./sketch/colours.png)
*color*


## Glyph Editing

The overview of the glyph shows the basic informations to the metrics and the name. In addition there is a tree view of the whole glyph structure visible.
This screen always shows up if there is no selection of any path or point.
In the tree view there is also the option to convert a outline path (default) to a stroke path ((not planned for the first beta)).

<Grid background>

[![Glyph](./sketch/Glyph.png)](./sketch/Glyph.png)
*Properties regarding the glyph*

</Grid>


### Information
* Glyph-Name (important for export)
* Left Side Bearing (LSB)
* Right Side Bearing (RSB)
* Tree view of the glyph construction
* Variables

## Point Editing (contours)
If a contour is based on contour points (like in Illustrator) each point on a curve will also have off-curve points. «Point in» and «Point out» are only visible if the on curve point is selected.

<Grid background>


[![Point Editing](./sketch/Select.png)](./sketch/Select.png)
*Editing a point on a contour*

</Grid>

### Information
* On curve point
* Off curve points
* Variables


## Brush Editing (stroke)
((not planned for the first beta))

If the glyph is based on a stroke, each point (p6 in the Figure) on the skeleton of the glyph extends to six points. Two on-curve points (a6, b6 in the Figure) and four off-curve points (aIn, aOut, bIn, bOut in the Figure).

*The red line of the skeleton is just to visualise the concept. It will not be part of the program, since it is not needed.*


<Grid background>

[![Brush Editing](./sketch/Stroke.png)](./sketch/Stroke.png)
*Editing a point in a stroke*

</Grid>


### Information
* Stroke width
* Stroke angel
* Balance (define where the stroke will be set on the skelet- line)
* On curve point A & B
* Off curve points A & B
* Variables


## Key Components
The interface has recurring components to build the GUI. The most important components are the parts to build up the parameters and the formulas for the shapes.

### Input field


[![Input field](./sketch/Input.png)](./sketch/Input.png)
*Numeral input*



[![Input field](./sketch/Input_Calc.png)](./sketch/Input_Calc.png)
*Calculations*



[![Input field](./sketch/Input_point.png)](./sketch/Input_point.png)
*Formula with geometry references*




[![Input field](./sketch/Input_Var.png)](./sketch/Input_Var.png)
*Formula with variable*



[![Input field](./sketch/Input_Edit.png)](./sketch/Input_Edit.png)
*Editing a formula*


Formulas and numeral inputs are filled into input fields. The coder/designer should get a visual representation what type of the input each part is. This information is primarly colour encoded.


#### Focus
If the focus is on the input field all other UI elements fade dark. All elements in bright colours stick out and can be clicked to get a reference of the clicked element in the formula.



<Grid background>
<Column start="1" end="7">


[![view textfield](./sketch/Select.png)](./sketch/Select.png)
*Inactive inputfield integratet in the GUI*

</Column>
<Column start="7" end="13">

[![edit textfield](./sketch/Edit.png)](./sketch/Edit.png)
*Interface when inputfield is active*

</Column>
</Grid>






### Variables

[![Variables](./sketch/Variable.png)](./sketch/Variable.png)
*Variable with integrated slider*

Variables can be typed as regular numbers or they can be changed by dragging a slider between a predefined minimum and maximum (settings in the triangle-menu).



## Next steps
((not planned for the first beta))  

To further improve the overview of the drawings and to keep order in the process of shaping the different parts of a character there could be done some more improvements.

### Tags
Each point and every contour could get a tag. These tags could then be shown and hide similar to a layer system but because in typedesign a layer has no significance there is no need for a top to bottom (front to back) order. But with tags an element could have several tags and if one tag gets hidden the part gets hidden. It would offer a more flexible way than a layer system.

### Multiple Glyphs
Right now the whole concept is just do draw one single glyph. In the future there should be an option to draw a whole font.

### Global and local variables
Variables should have the ability to be local to one glyph or global available to the whole font.

<br/>
<br/>
<br/>
<br/>
<br/>

#### Source on GitHub
Fix my mistakes [on GitHub](https://github.com/signalwerk/paramatters/blob/master/sites/example/src/pages/00--ui/index.md)
