/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  await knex("languageOriginalPurposes").del();
  await knex("languageParadigms").del();
  await knex("languages").del();
  await knex("purposes").del();
  await knex("paradigms").del();

  await knex("languages").insert([
    {
      name: "1C:Enterprise programming language",
      description:
        "The 1C:Enterprise programming language is a high-level domain-specific language used by the 1C:Enterprise platform, which is a business application development tool developed by the 1C Company. The 1C Company is a Russian software developer, distributor and publisher based in Moscow. 1C:Enterprise uses a Domain Driven Design approach to provide the specific tools needed to develop business software.",
    },
    {
      name: "ActionScript 3.0",
      description:
        "ActionScript is an object-oriented programming language originally developed by Macromedia Inc. (later acquired by Adobe). It is influenced by HyperTalk, the scripting language for HyperCard. It is now an implementation of ECMAScript (meaning it is a superset of the syntax and semantics of the language more widely known as JavaScript), though it originally arose as a sibling, both being influenced by HyperTalk. ActionScript code is usually converted to byte-code format by the compiler.",
      appeared: "2006-06-01",
    },
    {
      name: "Ada",
      description:
        "Ada is a structured, statically typed, imperative, and object-oriented high-level programming language, extended from Pascal and other languages. It has built-in language support for design by contract (DbC), extremely strong typing, explicit concurrency, tasks, synchronous message passing, protected objects, and non-determinism. Ada improves code safety and maintainability by using the compiler to find errors in favor of runtime errors. Ada is an international technical standard, jointly defined by the International Organization for Standardization (ISO), and the International Electrotechnical Commission (IEC). As of 2020, the standard, called Ada 2012 informally, is ISO/IEC 8652:2012.",
      appeared: "1980-01-01",
    },
    {
      name: "Ballerina",
      description:
        "Ballerina is an open source general-purpose programming language designed by WSO2 for cloud-era application programmers. The project started in 2015 by architects from WSO2 as a code-based alternative to the configuration-based integration tools such as EAI, ESB, and workflow products. It has various constructs geared toward cloud-native development including support for various data formats and protocols, reliability, distributed transactions, APIs, and event streams.",
      appeared: "2017-01-01",
    },
    {
      name: "Bash",
      description:
        "Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used as the default login shell for most Linux distributions. Bash was one of the first programs Linus Torvalds ported to Linux, alongside GCC. A version is also available for Windows 10 and Windows 11 via the Windows Subsystem for Linux. It is also the default user shell in Solaris 11. Bash was also the default shell in versions of Apple macOS from 10.3 (originally, the default shell was tcsh) to the 2019 release of macOS Catalina, which changed the default shell to zsh, although Bash remains available as an alternative shell.",
      appeared: "1989-01-01",
    },
    {
      name: "C",
      description:
        "C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs. It has found lasting use in operating systems, device drivers, protocol stacks, though decreasingly for application software. C is commonly used on computer architectures that range from the largest supercomputers to the smallest microcontrollers and embedded systems.",
      appeared: "1972-01-01",
    },
    {
      name: "C#",
      description:
        "C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.The C# programming language was designed by Anders Hejlsberg from Microsoft in 2000 and was later approved as an international standard by Ecma (ECMA-334) in 2002 and ISO/IEC (ISO/IEC 23270) in 2003. Microsoft introduced C# along with .NET Framework and Visual Studio, both of which were closed-source. At the time, Microsoft had no open-source products. Four years later, in 2004, a free and open-source project called Mono began, providing a cross-platform compiler and runtime environment for the C# programming language. A decade later, Microsoft released Visual Studio Code (code editor), Roslyn (compiler), and the unified .NET platform (software framework), all of which support C# and are free, open-source, and cross-platform. Mono also joined Microsoft but was not merged into .NET.",
      appeared: "2000-01-01",
    },
    {
      name: "C++",
      description:
        'C++ is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle, and IBM, so it is available on many platforms.',
      appeared: "1985-01-01",
    },
  ]);

  await knex("purposes").insert([
    {
      name: "Agile",
      description:
        "Agile is a software development methodology that emphasizes iterative development, collaboration between development teams and customers, and flexible responses to change.",
    },
    {
      name: "Application",
      description:
        "Application programming languages are designed for specific tasks or applications. They are often domain-specific, meaning they are optimized for specific industries or application areas, such as web development, scientific computing, or mobile app development.",
    },
    {
      name: "Business",
      description:
        "Business programming languages are specifically designed for business and commercial use. They typically have features and capabilities optimized for handling business data and transactions, such as accounting, invoicing, and inventory management. These languages are often easier for non-programmers to learn and use, and can also integrate with other business software such as databases and spreadsheets.",
    },
    {
      name: "Client-side",
      description:
        "Client-side programming languages are executed on the client device, typically a web browser. These languages are often used to create dynamic and interactive web pages. They allow web developers to add interactivity to web pages, such as animations, form validation, and real-time updates, without requiring a round trip to the server.",
    },
    {
      name: "Embedded",
      description:
        "Embedded programming languages are used to control and operate embedded systems, which are computer systems integrated into larger products and devices. Embedded systems can be found in many everyday products such as automobiles, home appliances, medical equipment, and consumer electronics. They are designed to be lightweight and efficient, with a focus on real-time performance, limited resources, and minimal power consumption.",
    },
    {
      name: "Game programming",
      description:
        "Game programming languages are specialized programming languages used for developing video games. These languages provide the tools and framework necessary to create interactive, graphical games that run on various platforms, such as desktop computers, consoles, and mobile devices. They often provide specialized features and libraries to support the development of graphics, animations, audio, user input, and other elements that are commonly found in video games. They also provide tools for physics simulation, collision detection, and other important elements of game development.",
    },
    {
      name: "General",
      description:
        "General programming languages can be used for a wide range of purposes. They are not tied to any specific application area and can be used for a variety of programming tasks, such as web development, scientific computing, and system programming.",
    },
    {
      name: "Integration",
      description:
        "Integration programming languages are specifically designed for integration, or connecting different software systems and applications. Integration programming languages typically provide tools and constructs for connecting to different systems, such as APIs, data sources, and middleware systems. They may also provide features for transforming and processing data between systems, as well as for managing workflows and coordinating complex interactions between different systems.",
    },
    {
      name: "Low-level operations",
      description:
        "Low-level operations programming languages are those that provide close-to-the-hardware access to the computer's resources. These languages are designed to perform tasks in a very efficient and direct manner, often at the cost of ease of use and readability. They are often used in systems programming, where performance and direct control over system resources is critical. They are also used in programming microcontrollers, and other embedded systems where memory and processing resources are limited.",
    },
    {
      name: "Mobile",
      description:
        "Mobile programming languages are used to develop software applications for mobile devices, such as smartphones and tablets. Mobile programming languages allow developers to create apps that can run on multiple platforms, such as iOS and Android, and take advantage of the capabilities and features of mobile devices, such as touch screens, sensors, and GPS.",
    },
    {
      name: "RAD",
      description:
        "Rapid Application Development languages designed to support rapid software development. They provide a high-level, intuitive syntax and a wide range of pre-built components and tools, allowing developers to create applications quickly and easily. They are often used for business and desktop applications, as well as for web development. They often include features such as drag-and-drop visual interfaces, automatic code generation, and integrated debugging tools, making them well-suited for rapid prototyping and development of small- to medium-sized applications.",
    },
    {
      name: "Realtime",
      description:
        "Realtime programming languages are designed for developing software systems that require real-time performance. Realtime systems are systems that have strict timing requirements and must respond to events in a timely manner, such as in the fields of aerospace, robotics, and process control. Realtime programming languages provide features and capabilities that are optimized for real-time performance, such as deterministic execution times, low latency, and predictable resource utilization.",
    },
    {
      name: "Scripting",
      description:
        "Scripting languages are high-level programming languages designed to automate repetitive tasks and provide quick solutions for specific problems. They are typically interpreted, rather than compiled, which makes them well-suited for short, simple scripts and for prototyping. Scripting languages are often used for tasks such as automating tasks in software applications, web development, system administration, and game development. They are known for their ease of use, concise syntax, and rapid development cycles. Scripting languages typically provide simple, high-level constructs for tasks such as file manipulation, string handling, and flow control. They also often provide access to system-level functionality, such as file and network access, making them a popular choice for system administration tasks.",
    },
    {
      name: "Server-side",
      description:
        "Server-side programming languages are used for writing server-side software, which runs on the server and provides services to clients over a network. Server-side software is responsible for handling tasks such as serving web pages, processing database queries, and handling security. They typically have capabilities for handling large amounts of data and for managing connections with many clients simultaneously.",
    },
    {
      name: "Shell",
      description:
        "Shell programming languages are command-line interpretive languages that provide a user interface to the underlying operating system. They allow users to interact with the system by typing commands and executing scripts, which are lists of commands that can be executed in sequence. Shell programming languages are typically used for tasks such as automating routine tasks, performing file management and manipulation, and executing system-level commands. They are also used for administrative tasks, such as setting environment variables, controlling system processes, and executing remote commands over a network. One of the main benefits of shell programming is its simplicity and ease of use. It has a relatively low learning curve compared to other programming languages and allows users to quickly automate tasks and get results.",
    },
    {
      name: "System",
      description:
        "System programming languages are designed for developing system software, such as operating systems, device drivers, and system utilities. System programming languages provide low-level control over hardware and system resources, and are optimized for performance, reliability, and efficiency. System programming languages often provide direct access to the underlying hardware and low-level system services, and are typically used for tasks that require close interaction with the hardware, such as memory and resource management, process management, and device I/O.",
    },
    {
      name: "Web",
      description:
        "Web programming languages are used for developing web applications, websites, and other types of web-based software. Web programming languages are used to create dynamic, interactive, and data-driven web pages, and allow developers to create web applications that can run on a variety of platforms and devices.",
    },
  ]);

  await knex("languageOriginalPurposes").insert([
    {
      languageName: "1C:Enterprise programming language",
      purposeName: "Application",
    },
    {
      languageName: "1C:Enterprise programming language",
      purposeName: "Business",
    },
    {
      languageName: "1C:Enterprise programming language",
      purposeName: "General",
    },
    {
      languageName: "1C:Enterprise programming language",
      purposeName: "Mobile",
    },
    { languageName: "1C:Enterprise programming language", purposeName: "RAD" },
    { languageName: "1C:Enterprise programming language", purposeName: "Web" },
    { languageName: "ActionScript 3.0", purposeName: "Application" },
    { languageName: "ActionScript 3.0", purposeName: "Client-side" },
    { languageName: "ActionScript 3.0", purposeName: "Web" },
    { languageName: "Ada", purposeName: "Application" },
    { languageName: "Ada", purposeName: "Embedded" },
    { languageName: "Ada", purposeName: "Realtime" },
    { languageName: "Ada", purposeName: "System" },
    { languageName: "Ballerina", purposeName: "Agile" },
    { languageName: "Ballerina", purposeName: "General" },
    { languageName: "Ballerina", purposeName: "Integration" },
    { languageName: "Ballerina", purposeName: "Server-side" },
    { languageName: "Bash", purposeName: "Scripting" },
    { languageName: "Bash", purposeName: "Shell" },
    { languageName: "C", purposeName: "Application" },
    { languageName: "C", purposeName: "General" },
    { languageName: "C", purposeName: "Low-level operations" },
    { languageName: "C", purposeName: "System" },
    { languageName: "C#", purposeName: "Application" },
    { languageName: "C#", purposeName: "Business" },
    { languageName: "C#", purposeName: "Client-side" },
    { languageName: "C#", purposeName: "Game programming" },
    { languageName: "C#", purposeName: "General" },
    { languageName: "C#", purposeName: "RAD" },
    { languageName: "C#", purposeName: "Server-side" },
    { languageName: "C#", purposeName: "Web" },
    { languageName: "C++", purposeName: "Application" },
    { languageName: "C++", purposeName: "System" },
  ]);

  await knex("paradigms").insert([
    {
      name: "Concurrent",
      description:
        "Concurrent programming deals with the design and implementation of software systems that can handle multiple tasks simultaneously. This paradigm provides the necessary tools and abstractions for writing programs that can run multiple tasks in parallel, making use of multiple processors or cores to speed up execution and improve performance.",
    },
    {
      name: "Distributed",
      description:
        "Distributed programming deals with the design and implementation of software systems that run on multiple computers, connected by a network. In this paradigm, a program is divided into multiple components that run on different machines, and communicate with each other to coordinate their activities.",
    },
    {
      name: "Event-driven",
      description:
        "Event-driven programming is a software design paradigm in which the flow of the program is determined by events, or triggers, generated by user interactions, system events, or other inputs. In event-driven programming, the program is written as a set of event handlers, or callback functions, that are executed in response to events.",
    },
    {
      name: "Functional",
      description:
        "Functional programming is a software development paradigm that emphasizes the use of functions and function composition to define the behavior of a program. In functional programming, functions are treated as first-class citizens, which means that they can be passed as arguments to other functions, returned as values from other functions, and stored in data structures just like any other value.",
    },
    {
      name: "Generic",
      description:
        "Generic programming is a software development paradigm in which algorithms and data structures are designed to handle values of various data types in a type-agnostic manner. This allows for greater reusability of code, as well as more efficient use of resources, as data structures and algorithms can be used with multiple data types without requiring separate implementations for each type.",
    },
    {
      name: "Imperative",
      description:
        "Imperative programming emphasizes the use of statements that change a program's state. In the imperative paradigm, a program consists of a sequence of statements that specify a step-by-step procedure for solving a problem. Each statement modifies the program's state in some way, either by changing the value of a variable or by making a call to a procedure.",
    },
    {
      name: "Object-based",
      description:
        "Object-based programming uses objects, which are instances of classes, to encapsulate data and behavior. In object-based programming, objects can interact with each other through messages, but the focus is mainly on data encapsulation and the implementation of behavior through procedures and functions. Object-based languages typically do not extend the paradigm with concepts of inheritance and polymorphism like object-oriented languages do.",
    },
    {
      name: "Object-oriented",
      description:
        "Object-oriented programming uses objects, which are instances of classes, to encapsulate data and behavior. In OOP, objects can interact with each other through messages, and the focus is on data encapsulation and the implementation of behavior through methods and functions associated with objects. OOP extends the object-based paradigm by adding the concepts of inheritance and polymorphism. In OOP, objects can inherit attributes and behavior from a parent class, and objects of different classes can be treated as objects of a common interface or base class. This allows for greater code reuse, abstraction, and modularity in OOP, as well as a more natural mapping of software to real-world concepts.",
    },
    {
      name: "Procedural",
      description:
        "Procedural programming emphasizes the use of procedures, or subroutines, to break down a program into smaller, manageable steps. In procedural programming, a program consists of a sequence of procedures, each of which performs a specific task and can be called from other procedures.",
    },
    {
      name: "Prototype-based",
      description:
        "Prototype-based programming uses objects without the need for classes or class hierarchies. In prototype-based programming, objects are created by cloning existing objects, which act as prototypes for the new objects. This approach is sometimes referred to as class-less or instance-based programming.",
    },
    {
      name: "Reflective",
      description:
        "Reflective programming enables a program to manipulate its own structure and behavior at runtime. It is a form of metaprogramming, in which a program can inspect and modify its own code, data, and metadata.",
    },
    {
      name: "Structured",
      description:
        "Structured programming languages are a type of programming language that support structured programming techniques. Structured programming is a software development paradigm that emphasizes breaking down a program into smaller, simpler components and using clear, concise control structures to manage the flow of execution. The goal of structured programming is to simplify the design and implementation of software programs and make them easier to understand, maintain, and modify. Structured programming languages support this goal by providing clear, concise, and well-defined syntax and control structures.",
    },
    {
      name: "Transactional",
      description:
        "Transactional programming languages use transactions to manage access to shared resources and ensure data consistency. In a transactional system, multiple operations are combined into a single unit of work, called a transaction. The transaction is executed as an atomic operation, meaning that either all of its operations are executed or none of them are. Transactions provide a mechanism for ensuring data consistency and reliability by rolling back changes if any errors occur during the transaction. This makes it possible to ensure that the state of the system remains consistent even in the face of failures, such as hardware failures or network disruptions. The transactional programming paradigm is often used in database systems, financial systems, and other applications that require strong consistency guarantees.",
    },
    {
      name: "Visual",
      description:
        "Diagrammatic/visual programming languages use visual representations of code, such as flow charts, state machines, or block diagrams, to define the behavior of a program. The idea behind visual programming is that it makes it easier to understand and communicate the logic of a program, especially for people who are not familiar with traditional text-based programming languages. They are often used for educational purposes, for teaching programming concepts to beginners, or for prototyping and modeling applications. Some visual programming languages can be used to generate code in a traditional text-based programming language, while others are standalone languages that can be used to create complete programs without writing any text-based code.",
    },
  ]);

  await knex("languageParadigms").insert([
    {
      languageName: "1C:Enterprise programming language",
      paradigmName: "Event-driven",
    },
    {
      languageName: "1C:Enterprise programming language",
      paradigmName: "Functional",
    },
    {
      languageName: "1C:Enterprise programming language",
      paradigmName: "Generic",
    },
    {
      languageName: "1C:Enterprise programming language",
      paradigmName: "Imperative",
    },
    {
      languageName: "1C:Enterprise programming language",
      paradigmName: "Object-based",
    },
    {
      languageName: "1C:Enterprise programming language",
      paradigmName: "Procedural",
    },
    {
      languageName: "1C:Enterprise programming language",
      paradigmName: "Prototype-based",
    },
    {
      languageName: "1C:Enterprise programming language",
      paradigmName: "Reflective",
    },
    { languageName: "ActionScript 3.0", paradigmName: "Event-driven" },
    { languageName: "ActionScript 3.0", paradigmName: "Functional" },
    { languageName: "ActionScript 3.0", paradigmName: "Imperative" },
    { languageName: "ActionScript 3.0", paradigmName: "Object-oriented" },
    { languageName: "Ada", paradigmName: "Concurrent" },
    { languageName: "Ada", paradigmName: "Distributed" },
    { languageName: "Ada", paradigmName: "Generic" },
    { languageName: "Ada", paradigmName: "Imperative" },
    { languageName: "Ada", paradigmName: "Object-oriented" },
    { languageName: "Ada", paradigmName: "Procedural" },
    { languageName: "Ballerina", paradigmName: "Imperative" },
    { languageName: "Ballerina", paradigmName: "Object-oriented" },
    { languageName: "Ballerina", paradigmName: "Functional" },
    { languageName: "Ballerina", paradigmName: "Procedural" },
    { languageName: "Ballerina", paradigmName: "Event-driven" },
    { languageName: "Ballerina", paradigmName: "Concurrent" },
    { languageName: "Ballerina", paradigmName: "Transactional" },
    { languageName: "Ballerina", paradigmName: "Visual" },
    { languageName: "Bash", paradigmName: "Imperative" },
    { languageName: "Bash", paradigmName: "Procedural" },
    { languageName: "C", paradigmName: "Imperative" },
    { languageName: "C", paradigmName: "Procedural" },
    { languageName: "C#", paradigmName: "Concurrent" },
    { languageName: "C#", paradigmName: "Event-driven" },
    { languageName: "C#", paradigmName: "Functional" },
    { languageName: "C#", paradigmName: "Generic" },
    { languageName: "C#", paradigmName: "Imperative" },
    { languageName: "C#", paradigmName: "Object-oriented" },
    { languageName: "C#", paradigmName: "Procedural" },
    { languageName: "C#", paradigmName: "Reflective" },
    { languageName: "C#", paradigmName: "Structured" },
    { languageName: "C++", paradigmName: "Imperative" },
    { languageName: "C++", paradigmName: "Object-oriented" },
    { languageName: "C++", paradigmName: "Functional" },
    { languageName: "C++", paradigmName: "Procedural" },
    { languageName: "C++", paradigmName: "Generic" },
  ]);
};
