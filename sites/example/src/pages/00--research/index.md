---
title: Research
author: "Stefan Huber"
date: "2019-10-23"
layout: post
draft: false
hideInMenu: false
path: "/research/"
tags:
  - "TagOne"
  - "TagTwo"
description: ""
---

import Box from 'gatsby-theme-signalwerk/src/components/Box';

## Content

```toc
exclude:
  - Content
from-heading: 2
to-heading: 2
```

## Intro

A short overview on parametric vector design.

## Metafont

Metafont is a Touring complete programming language with focus on typedesign. The concept is based on strokes and they can be adjusted to not only have letters looking like written with broad edge pen but with a typset character.

#### Pro

- Long running Project
- Finished (by definition)
- Highly customizable → Turing complete
- Especially made for Fontdesign

#### Con

- Output as Pixels
- Hard to handle and controll (even vor Programmers)
- No visual editing

## Illustrator

A outline based drawing program based on Cubic Splines

#### Pro

- Easy to understand

#### Con

- Not parametric
- Not suitable for fontdesign

## Kalliculator

[kalliculator.com](http://www.kalliculator.com/)  
Application to generate digital representations of a variable and flexible broad edge pen. The with and the angel of each stroke can be modified.

#### Pro

- flexible control of the skeleton-line
- parametric pen-parameters

#### Con

- not available to the public
- not able to generate good contoures

## Apparatus

[aprt.us](http://aprt.us/)  
A full parametric graphic design «constructor». The included constraint solver helps to define relations between visual representation and data. Highly inspired by Bret Victor.

#### Pro

- fresh and easy to understand (compared to the complexity of the tool)
- constraint solver feels naturally

#### Con

- No splines, only Polygons

## Prototype

[prototypo.io](https://www.prototypo.io/)

<Box maxWidth="60">

![Prototypo](https://web.archive.org/web/20170804055955if_/https://www.prototypo.io/content/1-blog/18-versatile-type-design-for-the-web/parametric-font.gif)
_A parametric glyph in motion by Prototypo_

</Box>

A web-based editor for parametric typefaces. The editor allows to modify but not to create three different parametric typefaces. The .ptf-format (parametric typeface) is is very advanced and allows for complex but free font models.

[prototypo-builder](https://github.com/byte-foundry/prototypo-builder) is a new Project to generate the .ptf-Files in a Browser.

#### Pro

- hight quality font models
- well designed GUI for parameters

#### Con

- Without a deep understanding of .ptf it's not possible to generate new fonts but just to modify existing masters.

## Metapolator

Metapolator is a young project and has a radical domain specific selector/programming language to transform and generate shapes and points. There are some GUI-Elements but that's more to controll a final typedesign and not to support a typedesigner

#### Pro

- Hobby Splines
- Point transformation with custom Selector-Language
- Highly customizable
- Support by google

#### Con

- Hard to handle and controll (even vor Programmers)
- Small community

## Programming Libs

Programming Libs are most of the time spline based drawing abstractions in code. Sometimes they have clearly the focus of typedesing, sometimes they have mor a general outline-based approach.

- [Paper.js](http://paperjs.org/)
- [Robofab](http://robofab.org/)
- [ufo.js](http://robofab.org/)
- [fontkit](https://github.com/devongovett/fontkit)

## Type Generator

In 2006 Remo Caminada and Ludovic Varone developed (in Flash) for their Diploma at the Zurich University of the Arts a type generator based on a math based model. They won the following awards with it:

- 2007 Red Dot Award, junior prize
- Föderpreis der ZHdK für die beste Diplomarbeit 2006
- Schweizer Förderpreis für Deisgn 2007
- Förderpreis Graubünden 2007

### Links

- [Pictures](https://medienarchiv.zhdk.ch/people/d26868c4-8fbf-4f8d-ae12-4f7b0ed1ffce)
- [Interview](https://de.red-dot.org/2484.html)
* [Code Systems – Overview](https://threader.app/thread/1326687222507077637)

## Other projects

- [Laikafont](http://laikafont.ch/) – dynamic web typeface
- [Typeconstructor](http://www.haagseletters.nl/) – parametric type design application
- [Fontconstructor](http://www.fontconstructor.com/) – fonteditor based on components
- [Glyphr](http://glyphrstudio.com/) – online typedesigner
- [Generative Typografie](http://generative-typografie.de/) – tests with coded typefaces
- [Polynom SVG-Webeditor](https://github.com/anthonydugois/polynom)
- [MagicBox – Parametric Editor](https://github.com/studioludens/MagicBox)
- [Lyra – Visualization Design Environment ](https://github.com/vega/lyra)
- [Letterink – skeleton type design](https://www.letterinkapp.com)
- [Graphite Description Language](https://scripts.sil.org/cms/scripts/page.php?site_id=projects&item_id=graphite_devFont#gdl)
- [JS.Sketcher](https://github.com/xibyte/jsketcher) – Parametric 2D and 3D modeler 
- [Maker JS](https://maker.js.org/)
- [Parametric SVG in VisiCut](https://github.com/t-oster/VisiCut/wiki/Parametric-SVG)
- [SVG-Editor](https://github.com/easylogic/editor)

## Algorithms

- [Hausdorff Distance](https://en.wikipedia.org/wiki/Hausdorff_distance)
- [Shape context](https://en.wikipedia.org/wiki/Shape_context)
- [Hausdorff Distance & Shape context in JS](https://github.com/Sirvasile/Typefont)
- [SVG path bounding box calculator](https://github.com/icons8/svg-path-bounding-box/)
* [Tunni line & Harmonization](https://github.com/simoncozens/SuperTool)
* [Path simplification](https://github.com/simoncozens/Supertool2-Simplify)
* [Path balancing](https://github.com/simoncozens/Supertool2-Balance)
* [Hobby, J. D. (1993). Generating automatically tuned bitmaps from outlines. Journal of the ACM, 40(1), 48–94.](https://sci-hub.se/10.1145/138027.138040)

<br/>
<br/>
<br/>
<br/>
<br/>

#### Source on GitHub

Fix my mistakes [on GitHub](https://github.com/signalwerk/paramatters/blob/master/sites/example/src/pages/00--research/index.md)
