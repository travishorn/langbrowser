/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  await knex("languageParadigms").del();
  await knex("languageOriginalPurposes").del();
  await knex("paradigms").del();
  await knex("purposes").del();
  await knex("languages").del();

  await knex("languages").insert([
    {
      name: "1C:Enterprise programming language",
      description:
        "The 1C:Enterprise programming language is a high-level domain-specific language used by the 1C:Enterprise platform, which is a business application development tool developed by the 1C Company. The 1C Company is a Russian software developer, distributor and publisher based in Moscow. 1C:Enterprise uses a Domain Driven Design approach to provide the specific tools needed to develop business software.",
    },
    {
      name: "ABAP",
      description:
        "ABAP (Advanced Business Application Programming) is a high-level programming language created by the German software company SAP SE. It is currently positioned, alongside Java, as the language for programming the SAP NetWeaver Application Server, which is part of the SAP NetWeaver platform for building business applications.",
      appeared: "1983-01-01",
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
      name: "Aldor",
      description:
        "Aldor is a programming language. It is the successor of A# as the extension language of the Axiom computer algebra system. Aldor combines imperative, functional, and object-oriented features. It has an elaborate type system,allowing types to be used as first-class values. Aldor's syntax is heavily influenced by Pascal, but it is optionally indentation-sensitive, using whitespace characters and the off-side rule, like Python. In its current implementation, it is compiled, but an interactive listener is provided. Aldor is distributed as free and open-source software, under the Apache License 2.0. ",
      appeared: "1990-01-01",
    },
    {
      name: "ALGOL 58",
      description:
        "ALGOL 58, originally named IAL, is one of the family of ALGOL computer programming languages. It was an early compromise design soon superseded by ALGOL 60. According to John Backus: The Zurich ACM-GAMM Conference had two principal motives in proposing the IAL: (a) To provide a means of communicating numerical methods and other procedures between people, and (b) To provide a means of realizing a stated process on a variety of machines. ALGOL 58 introduced the fundamental notion of the compound statement, but it was restricted to control flow only, and it was not tied to identifier scope in the way that Algol 60's blocks were.",
      appeared: "1958-01-01",
    },
    { name: "ALGOL 60", appeared: "1960-01-01" },
    { name: "ALGOL 68", appeared: "1968-01-01" },
    { name: "APL", appeared: "1966-01-01" },
    { name: "Assembly language", appeared: "1947-01-01" },
    { name: "Ateji PX" },
    { name: "AutoHotkey", appeared: "2003-11-10" },
    { name: "AutoIt", appeared: "1999-01-01" },
    {
      name: "AWK",
      description:
        "AWK is a domain-specific language designed for text processing and typically used as a data extraction and reporting tool. Like sed and grep, it is a filter, and is a standard feature of most Unix-like operating systems. The AWK language is a data-driven scripting language consisting of a set of actions to be taken against streams of textual data - either run directly on files or used as part of a pipeline - for purposes of extracting or transforming text, such as producing formatted reports. The language extensively uses the string datatype, associative arrays (that is, arrays indexed by key strings), and regular expressions. While AWK has a limited intended application domain and was especially designed to support one-liner programs, the language is Turing-complete, and even the early Bell Labs users of AWK often wrote well-structured large AWK programs. AWK was created at Bell Labs in the 1970s, and its name is derived from the surnames of its authors: Alfred Aho, Peter Weinberger, and Brian Kernighan. The acronym is pronounced the same as the bird auk, which is on the cover of The AWK Programming Language. When written in all lowercase letters, as awk, it refers to the Unix or Plan 9 program that runs scripts written in the AWK programming language.",
      appeared: "1977-01-01",
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
    { name: "BASIC", appeared: "1964-05-01" },
    { name: "BeanShell", appeared: "1999-01-01" },
    { name: "BLISS", appeared: "1970-01-01" },
    { name: "BlitzMax", appeared: "2004-01-01" },
    { name: "Boo", appeared: "2003-01-01" },
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
    { name: "Clarion", appeared: "1986-04-01" },
    { name: "Clean", appeared: "1987-01-01" },
    {
      name: "Clojure",
      description:
        "Clojure is a dynamic and functional dialect of the Lisp programming language on the Java platform. Like other Lisp dialects, Clojure treats code as data and has a Lisp macro system. The current development process is community-driven, overseen by Rich Hickey as its benevolent dictator for life (BDFL). Clojure advocates immutability and immutable data structures and encourages programmers to be explicit about managing identity and its states. This focus on programming with immutable values and explicit progression-of-time constructs is intended to facilitate developing more robust, especially concurrent, programs that are simple and fast. While its type system is entirely dynamic, recent efforts have also sought the implementation of a dependent type system.",
      appeared: "2007-01-01",
    },
    { name: "CLU", appeared: "1975-01-01" },
    { name: "COBOL", appeared: "1959-01-01" },
    { name: "Cobra", appeared: "2006-01-01" },
    { name: "CoffeeScript", appeared: "2009-12-13" },
    { name: "ColdFusion (CFML)", appeared: "1995-01-01" },
    { name: "COMAL 80", appeared: "1980-01-01" },
    { name: "Common Lisp", appeared: "1984-01-01" },
    { name: "Crystal", appeared: "2014-06-19" },
    { name: "Curry" },
    { name: "Cython", appeared: "2007-06-28" },
    { name: "D", appeared: "2001-12-08" },
    { name: "Dart", appeared: "2011-10-10" },
    { name: "Delphi", appeared: "1995-01-01" },
    { name: "Dylan", appeared: "1992-01-01" },
    { name: "Eiffel", appeared: "1986-01-01" },
    { name: "ELAN", appeared: "1974-01-01" },
    { name: "Elixir", appeared: "2012-01-01" },
    { name: "Elm", appeared: "2012-03-30" },
    { name: "Emacs Lisp", appeared: "1985-01-01" },
    { name: "Erlang", appeared: "1986-01-01" },
    { name: "Euphoria", appeared: "1993-01-01" },
    { name: "F#", appeared: "2005-01-01" },
    { name: "Factor", appeared: "2003-01-01" },
    { name: "Forth", appeared: "1970-01-01" },
    { name: "Fortran", appeared: "1957-01-01" },
    { name: "FP", appeared: "1977-01-01" },
    { name: "FreeBASIC", appeared: "2004-01-01" },
    { name: "Gambas", appeared: "1999-01-01" },
    { name: "Game Maker Language", appeared: "1999-11-15" },
    { name: "GLBasic", appeared: "2000-01-01" },
    { name: "Go", appeared: "2009-11-10" },
    { name: "Gosu", appeared: "2010-01-01" },
    { name: "GraphTalk" },
    { name: "Groovy", appeared: "2003-01-01" },
    { name: "Harbour", appeared: "1999-01-01" },
    { name: "Haskell", appeared: "1990-01-01" },
    { name: "Haxe", appeared: "2005-11-14" },
    { name: "HyperNext" },
    { name: "HyperTalk", appeared: "1987-01-01" },
    { name: "Io", appeared: "2002-01-01" },
    { name: "IPL", appeared: "1956-01-01" },
    { name: "ISLISP", appeared: "1990-01-01" },
    { name: "J", appeared: "1990-01-01" },
    { name: "JADE", appeared: "1996-01-01" },
    { name: "Java", appeared: "1995-05-23" },
    { name: "JavaScript", appeared: "1995-12-04" },
    { name: "Joy", appeared: "2001-01-01" },
    { name: "jq", appeared: "2012-08-21" },
    { name: "Julia", appeared: "2012-01-01" },
    { name: "K", appeared: "1993-01-01" },
    { name: "Kotlin", appeared: "2011-07-22" },
    { name: "Ksh", appeared: "1983-01-01" },
    { name: "LabVIEW (G)", appeared: "1986-01-01" },
    { name: "LFE", appeared: "2008-01-01" },
    { name: "Linden Scripting Language (LSL)" },
    { name: "Lisp", appeared: "1960-01-01" },
    { name: "LiveCode", appeared: "2001-07-11" },
    { name: "Logtalk", appeared: "1998-01-01" },
    { name: "Lua", appeared: "1993-01-01" },
    { name: "Maple", appeared: "1982-01-01" },
    { name: "Mathematica", appeared: "1988-06-23" },
    { name: "MATLAB", appeared: "1979-02-01" },
    { name: "Modula-2", appeared: "1978-01-01" },
    { name: "Modula-3", appeared: "1988-01-01" },
    { name: "MUMPS (M)", appeared: "1966-01-01" },
    { name: "Nim", appeared: "2008-01-01" },
    { name: "Oberon", appeared: "1987-01-01" },
    { name: "Object Pascal", appeared: "1986-01-01" },
    { name: "Objective-C", appeared: "1984-01-01" },
    { name: "OCaml", appeared: "1996-01-01" },
    { name: "occam", appeared: "1983-01-01" },
    { name: "Opa", appeared: "2011-01-01" },
    { name: "OpenLisp", appeared: "1988-04-01" },
    { name: "Oxygene", appeared: "2005-01-01" },
    { name: "Oz-Mozart", appeared: "1991-01-01" },
    { name: "Pascal", appeared: "1970-01-01" },
    { name: "Perl", appeared: "1987-12-18" },
    { name: "Pharo", appeared: "2008-01-01" },
    { name: "PHP", appeared: "1995-06-08" },
    { name: "PL/I", appeared: "1964-01-01" },
    { name: "PL/SQL", appeared: "1995-01-01" },
    { name: "Plus", appeared: "1976-01-01" },
    { name: "PostScript", appeared: "1982-01-01" },
    { name: "PowerShell", appeared: "2006-11-14" },
    { name: "Prolog", appeared: "1972-01-01" },
    { name: "PureBasic", appeared: "1998-01-01" },
    { name: "PureScript", appeared: "2013-01-01" },
    { name: "Python", appeared: "1991-02-20" },
    { name: "R", appeared: "1993-08-01" },
    { name: "Racket", appeared: "1995-01-01" },
    { name: "Raku", appeared: "2015-12-25" },
    { name: "REALbasic", appeared: "1998-01-01" },
    { name: "Reason", appeared: "2016-05-16" },
    { name: "Rebol", appeared: "1997-01-01" },
    { name: "Red", appeared: "2011-01-01" },
    { name: "Rexx", appeared: "1979-01-01" },
    { name: "Ring", appeared: "2016-01-25" },
    { name: "RPG", appeared: "1959-01-01" },
    { name: "Ruby", appeared: "1995-01-01" },
    { name: "Rust", appeared: "2010-07-07" },
    { name: "S-Lang", appeared: "1992-01-01" },
    { name: "S", appeared: "1976-01-01" },
    { name: "Scala", appeared: "2004-01-20" },
    { name: "Scheme", appeared: "1975-01-01" },
    { name: "Seed7", appeared: "2005-01-01" },
    { name: "Simula", appeared: "1962-01-01" },
    { name: "Small Basic", appeared: "2008-10-23" },
    { name: "Smalltalk", appeared: "1972-01-01" },
    { name: "SNOBOL", appeared: "1962-01-01" },
    { name: "Standard ML", appeared: "1983-01-01" },
    { name: "Swift", appeared: "2014-06-02" },
    { name: "Tcl", appeared: "1988-01-01" },
    { name: "TypeScript", appeared: "2012-10-01" },
    { name: "Visual Basic .NET", appeared: "2001-01-01" },
    { name: "Visual Basic", appeared: "1991-05-01" },
    { name: "Visual FoxPro", appeared: "1992-01-01" },
    { name: "Visual Prolog" },
    { name: "WebAssembly", appeared: "2017-03-01" },
    { name: "Wolfram Language", appeared: "1988-01-01" },
    { name: "x86-64 Assembly", appeared: "1972-01-01" },
    { name: "XL" },
    { name: "Xojo", appeared: "2013-06-04" },
    { name: "XPath/XQuery", appeared: "1998-01-01" },
    { name: "Zeek", appeared: "1998-01-24" },
    { name: "Zig", appeared: "2016-02-08" },
    { name: "Zsh", appeared: "1990-01-01" },
  ]);

  await knex("purposes").insert([
    { name: "Administration" },
    {
      name: "Agile",
      description:
        "Agile is a software development methodology that emphasizes iterative development, collaboration between development teams and customers, and flexible responses to change.",
    },
    { name: "Animation" },
    {
      name: "Application",
      description:
        "Application programming languages are designed for specific tasks or applications. They are often domain-specific, meaning they are optimized for specific industries or application areas, such as web development, scientific computing, or mobile app development.",
    },
    { name: "Artificial intelligence" },
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
    { name: "Data processing" },
    { name: "Databases" },
    { name: "Distributed" },
    { name: "Domain-specific" },
    { name: "Education" },
    {
      name: "Embedded",
      description:
        "Embedded programming languages are used to control and operate embedded systems, which are computer systems integrated into larger products and devices. Embedded systems can be found in many everyday products such as automobiles, home appliances, medical equipment, and consumer electronics. They are designed to be lightweight and efficient, with a focus on real-time performance, limited resources, and minimal power consumption.",
    },
    {
      name: "Game",
      description:
        "Game programming languages are specialized programming languages used for developing video games. These languages provide the tools and framework necessary to create interactive, graphical games that run on various platforms, such as desktop computers, consoles, and mobile devices. They often provide specialized features and libraries to support the development of graphics, animations, audio, user input, and other elements that are commonly found in video games. They also provide tools for physics simulation, collision detection, and other important elements of game development.",
    },
    {
      name: "General",
      description:
        "General programming languages can be used for a wide range of purposes. They are not tied to any specific application area and can be used for a variety of programming tasks, such as web development, scientific computing, and system programming.",
    },
    { name: "Graphics" },
    { name: "GUI automation" },
    { name: "Host-driven" },
    { name: "Industrial" },
    {
      name: "Integration",
      description:
        "Integration programming languages are specifically designed for integration, or connecting different software systems and applications. Integration programming languages typically provide tools and constructs for connecting to different systems, such as APIs, data sources, and middleware systems. They may also provide features for transforming and processing data between systems, as well as for managing workflows and coordinating complex interactions between different systems.",
    },
    { name: "IoT" },
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
    { name: "Numerical" },
    { name: "Office automation" },
    { name: "Parrallel" },
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
    { name: "Research" },
    { name: "Scientific" },
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
    { name: "Symbolic" },
    {
      name: "System",
      description:
        "System programming languages are designed for developing system software, such as operating systems, device drivers, and system utilities. System programming languages provide low-level control over hardware and system resources, and are optimized for performance, reliability, and efficiency. System programming languages often provide direct access to the underlying hardware and low-level system services, and are typically used for tasks that require close interaction with the hardware, such as memory and resource management, process management, and device I/O.",
    },
    { name: "Technical computing" },
    { name: "Text processing" },
    { name: "Virtual worlds" },
    {
      name: "Web",
      description:
        "Web programming languages are used for developing web applications, websites, and other types of web-based software. Web programming languages are used to create dynamic, interactive, and data-driven web pages, and allow developers to create web applications that can run on a variety of platforms and devices.",
    },
  ]);

  await knex("paradigms").insert([
    { name: "Array-oriented" },
    { name: "Aspect-oriented" },
    { name: "Component-oriented" },
    { name: "Concatenative" },
    {
      name: "Concurrent",
      description:
        "Concurrent programming deals with the design and implementation of software systems that can handle multiple tasks simultaneously. This paradigm provides the necessary tools and abstractions for writing programs that can run multiple tasks in parallel, making use of multiple processors or cores to speed up execution and improve performance.",
    },
    { name: "Data-centric" },
    { name: "Data-driven" },
    { name: "Dataflow" },
    { name: "Declarative" },
    { name: "Dialected" },
    { name: "Discrete event simulation" },
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
    { name: "Extensible" },
    {
      name: "Functional",
      description:
        "Functional programming is a software development paradigm that emphasizes the use of functions and function composition to define the behavior of a program. In functional programming, functions are treated as first-class citizens, which means that they can be passed as arguments to other functions, returned as values from other functions, and stored in data structures just like any other value.",
    },
    { name: "Generative" },
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
    { name: "Lazy evaluation" },
    { name: "Logic" },
    { name: "Meta" },
    { name: "Modular" },
    { name: "Multiple dispatch" },
    { name: "Natural-language" },
    { name: "Non-determinism" },
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
    { name: "Pi calculus" },
    { name: "Pipeline" },
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
    { name: "Shared-memory parallelism" },
    { name: "Stack-oriented" },
    { name: "Stepwise refinement" },
    {
      name: "Structured",
      description:
        "Structured programming languages are a type of programming language that support structured programming techniques. Structured programming is a software development paradigm that emphasizes breaking down a program into smaller, simpler components and using clear, concise control structures to manage the flow of execution. The goal of structured programming is to simplify the design and implementation of software programs and make them easier to understand, maintain, and modify. Structured programming languages support this goal by providing clear, concise, and well-defined syntax and control structures.",
    },
    { name: "Syntactic macros" },
    { name: "Tacit" },
    {
      name: "Transactional",
      description:
        "Transactional programming languages use transactions to manage access to shared resources and ensure data consistency. In a transactional system, multiple operations are combined into a single unit of work, called a transaction. The transaction is executed as an atomic operation, meaning that either all of its operations are executed or none of them are. Transactions provide a mechanism for ensuring data consistency and reliability by rolling back changes if any errors occur during the transaction. This makes it possible to ensure that the state of the system remains consistent even in the face of failures, such as hardware failures or network disruptions. The transactional programming paradigm is often used in database systems, financial systems, and other applications that require strong consistency guarantees.",
    },
    { name: "Tree-oriented" },
    { name: "Vectorized" },
    {
      name: "Visual",
      description:
        "Diagrammatic/visual programming languages use visual representations of code, such as flow charts, state machines, or block diagrams, to define the behavior of a program. The idea behind visual programming is that it makes it easier to understand and communicate the logic of a program, especially for people who are not familiar with traditional text-based programming languages. They are often used for educational purposes, for teaching programming concepts to beginners, or for prototyping and modeling applications. Some visual programming languages can be used to generate code in a traditional text-based programming language, while others are standalone languages that can be used to create complete programs without writing any text-based code.",
    },
    { name: "Void-safe" },
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
    { languageName: "C#", purposeName: "Game" },
    { languageName: "C#", purposeName: "General" },
    { languageName: "C#", purposeName: "RAD" },
    { languageName: "C#", purposeName: "Server-side" },
    { languageName: "C#", purposeName: "Web" },
    { languageName: "C++", purposeName: "Application" },
    { languageName: "C++", purposeName: "System" },
    { languageName: "ABAP", purposeName: "Application" },
    { languageName: "ABAP", purposeName: "Business" },
    { languageName: "AWK", purposeName: "Domain-specific" },
    { languageName: "AWK", purposeName: "Scripting" },
    { languageName: "Clojure", purposeName: "General" },
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
    { languageName: "ABAP", paradigmName: "Imperative" },
    { languageName: "ABAP", paradigmName: "Object-oriented" },
    { languageName: "ABAP", paradigmName: "Structured" },
    { languageName: "AWK", paradigmName: "Procedural" },
    { languageName: "AWK", paradigmName: "Pipeline" },
    { languageName: "AWK", paradigmName: "Data-driven" },
    { languageName: "Clojure", paradigmName: "Functional" },
    { languageName: "Clojure", paradigmName: "Concurrent" },
  ]);
};
