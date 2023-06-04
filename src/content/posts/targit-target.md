---
title: 'TARGIT CubeSat Target Subsystem'
pubDate: 2020-05-05
description: 'A CubeSat subsystem.'
author: 'Alex Bustos'
image: '../../assets/posts/targit-target/space-render.webp'
imageAlt: 'A 3D render of a small satellite in space.'
project: true
tags: ['3D printing', 'CAD', 'Research']
---

For a little background information, The Tethering and Ranging Mission of the Georgia Institute of Technology (TARGIT) is a CubeSat Mission with the primary objective of demonstrating a LiDAR imaging system on a CubeSat platform. In order to test this imaging system, the satellite will deploy a small target with its own power system, electronics, communications equipment, and sensors, that will inflate a mylar balloon. This mylar balloon will serve as the target for the satellite's imaging operations.

On [another page](/posts/targit-electronics), you can see my work on the electronics used inside the "target" subsystem. This page mostly contains my work on the target subsystem structure and its manufacture/assembly. As I mentioned on the TARGIT Electronics page, this research is ITAR restricted, so while I can share pictures, I can't share specific details or any files of my work. I started working on the target subsystem during the summer of 2019 and continued working on it through the spring of 2020. The target structure houses all of the necessary systems to allow the mylar balloon I mentioned earlier to inflate so that the main satellite can image it. This includes solar panels, retroreflectors, batteries, a microcontroller, a pressurized gas reservoir, valves, a hard mounting point to tether the target to the main satellite, and a number of other systems.

In order to inflate the balloon, pressurized gas must flow from a reservoir through air channels and valves and into the balloon. Due to the complexity of these reservoirs and channels, the targe structure is predominately SLA 3D printed. The basic idea is that there is a centerbody composed of several 3D printed parts. These parts incorporate a number of features, including a gas reservoir, recesses for electronics and a battery, and a series of air channels. The centerbody structure is surrounded by spring-loaded hinged panels that fold out once the target is deployed from the main satellite. While the basic geometric constraints of these parts were established when I began working on the project, I ended up designing from the ground up much of the structure. The flight hardware was outsourced to a professional 3D printing company using SLA technology and a material with high stiffness and temperature resistance. We actually were able to get my designs manufactured before the end of the spring 2020 semester, which was super exciting. To prototype the structure, I used a Formlabs Form 2 SLA 3D printer with standard resin. Using the same printing technology as the professional manufacturers allowed me to see what sort of features were possible to print and which features would be problematic.

The design phase for the target structure is largely complete. As I mentioned earlier, we've already ordered the professionally manufactured parts and are in the process of moving on to assembling flight hardware and testing.
