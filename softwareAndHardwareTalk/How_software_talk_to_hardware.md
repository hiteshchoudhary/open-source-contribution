> How software talk to hardware ?

Software and hardware communicate with each other using system resources and drivers: 
System resources
Tools used by software and hardware to communicate with each other. These include memory addresses, I/O addresses, interrupt request numbers (IRQs), and direct memory access (DMA) channels. 
Drivers
Program files that allow the operating system to recognize hardware devices and their properties. Each piece of hardware has its own driver, which ensures that the operating system's commands are translated into instructions that the device can understand. For example, when you plug in a new USB device, the operating system automatically loads the appropriate driver. 

Here are some examples of how software and hardware interact:
Typing a letter
The hardware translates the letter into digital code and sends it to the software, which then displays the letter on the screen. 
Playing a video game
When a user presses a button on the hardware console, the game software moves the in-game character on the hardware monitor. 
Sending an email
The user enters the email address, types the message using a keyboard, and then uses a mouse to click the send button. 

> One more opinion

*credits-stackoverflow*

While the answer is fairly complex, and requires understanding the basics of electrical systems & circuits (KVL, KCL), binary numbers, and boolean logic, we can describe the process at a high level: code (represented by plain text words) is compiled, assembled and ultimately translated into a combination of Zeroes and Ones, which represent low and high voltages respectively.

When voltages are applied to materials & circuits, those voltages can change their physical properties, such as closing a circuit which supplies current to a light bulb (causing it to illuminate) or supplying current to a dc-motor which might open up a CD/DVD/Bluray/(?) Drive.

Now imagine a hypothetical 1-bit CPU, which has the ability to close a circuit and deliver current to a buzzer, making a sound. This 1-bit CPU has a single Input, which can have two values: 0 and 1.

This simple CPU has a very simple assembly language: ON and OFF, and we have a fancy programming language that provides some nicer abstractions: cpu.turnOn,cpu.turnOff.

I write my program cpu.turnOn; compile it, assemble it, and it's ready to be run. When I run the program on my CPU, the buzzer turns on.

In the real world, computers are made up of more complex systems. Instead of a single 1-bit CPU, we have 64-bit CPU, with complex instruction sets, and a myriad of devices.

To make things for a complex system to interact, these systems are made up of layers of abstractions.

The lowest layer is voltages, circuits and silicon, or what you might think of as the actual 'physical hardware.' Along side the hardware will typically sit a 'microcontroller' or a specialized processing unit that is designed to interact with the specifics of a hardware. Imagine an optical disk drive, it's microcontroller has the ability to eject the drive bay, start up the motor, align the laser, and stream data off disc.

The software that the microcontroller runs, is referred to as firmware. It's a specialized operating system that controls hardware functions and may also include an API. In the imaginary 1-bit CPU example, the program would be firmware, and the cpu.turnOn, cpu.turnOff would be the API.

Given a computer is made up of lots of hardware components (graphics, storage, communications, i/o), computers are made up of lots of specialized firmwares. For anything useful to get done with that hardware, another layer of abstraction is needed, for example to deal with Keyboards in a universal manner, or to allow mice, touchpads, and trackballs all to behave the same despite different interactions. This is where the Operating System comes in. The OS provides an API to manage groups of related devices, and provides hooks for hardware vendors to provide the translation between the OS commands, and the commands the microcontroller understand. In Windows land, this is a driver.

The next layer of abstraction above Operating Systems and Drivers, are applications, what users use to do real work (or play Fortnite). These programs are written in a myriad of languages, SDK, and toolkits, and is the reason why StackOverflow exists. Those languages compile down into executable code which the OS loads and manages, and executed by the computer.

Putting it all together with the shutdown command: the command interpreter uses an OS level API that manages system power. That API sends a notification to the rest of the OS to handle things like gracefully flushing memory buffers, saving application state, terminating communication channels, and powering off a variety of hardware systems (or more likely going into low-power consumption mode). It also uses a power driver (ACPI?) to interface with the computer's power management subsystem. This subsystem is instructed to shutdown, which in turn sends a signal to the computer's power supply to break the circuit and no longer supply power to the majority of components.
