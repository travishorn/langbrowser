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
        "Ada is a structured, statically typed, imperative, and object-oriented high-level programming language, extended from Pascal and other languages. It has built-in language support for design by contract (DbC), extremely strong typing, explicit concurrency, tasks, synchronous message passing, protected objects, and non-determinism. Ada improves code safety and maintainability by using the compiler to find errors in favor of runtime errors.",
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
        "AWK is a domain-specific language designed for text processing and typically used as a data extraction and reporting tool. Like sed and grep, it is a filter, and is a standard feature of most Unix-like operating systems. The AWK language is a data-driven scripting language consisting of a set of actions to be taken against streams of textual data - either run directly on files or used as part of a pipeline - for purposes of extracting or transforming text, such as producing formatted reports.",
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
        "Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used as the default login shell for most Linux distributions. Bash was one of the first programs Linus Torvalds ported to Linux, alongside GCC. A version is also available for Windows 10 and Windows 11 via the Windows Subsystem for Linux. It is also the default user shell in Solaris 11.",
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
        "C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.The C# programming language was designed by Anders Hejlsberg from Microsoft in 2000 and was later approved as an international standard by Ecma (ECMA-334) in 2002 and ISO/IEC (ISO/IEC 23270) in 2003.",
      appeared: "2000-01-01",
    },
    {
      name: "C++",
      description:
        'C++ is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.',
      appeared: "1985-01-01",
    },
    { name: "Clarion", appeared: "1986-04-01" },
    { name: "Clean", appeared: "1987-01-01" },
    {
      name: "Clojure",
      description:
        "Clojure is a dynamic and functional dialect of the Lisp programming language on the Java platform. Like other Lisp dialects, Clojure treats code as data and has a Lisp macro system. The current development process is community-driven, overseen by Rich Hickey as its benevolent dictator for life (BDFL). Clojure advocates immutability and immutable data structures and encourages programmers to be explicit about managing identity and its states.",
      appeared: "2007-01-01",
    },
    { name: "CLU", appeared: "1975-01-01" },
    {
      name: "COBOL",
      description:
        "COBOL (common business-oriented language) is a compiled English-like computer programming language designed for business use. It is an imperative, procedural and, since 2002, object-oriented language. COBOL is primarily used in business, finance, and administrative systems for companies and governments. COBOL is still widely used in applications deployed on mainframe computers, such as large-scale batch and transaction processing jobs.",
      appeared: "1959-01-01",
    },
    { name: "Cobra", appeared: "2006-01-01" },
    {
      name: "CoffeeScript",
      description:
        "CoffeeScript is a programming language that compiles to JavaScript. It adds syntactic sugar inspired by Ruby, Python, and Haskell in an effort to enhance JavaScript's brevity and readability. Specific additional features include list comprehension and destructuring assignment. CoffeeScript support is included in Ruby on Rails version 3.1 and Play Framework. In 2011, Brendan Eich referenced CoffeeScript as an influence on his thoughts about the future of JavaScript.",
      appeared: "2009-12-13",
    },
    {
      name: "ColdFusion (CFML)",
      description:
        "ColdFusion Markup Language, more commonly known as CFML, is a scripting language for web development that runs on the JVM, the .NET framework, and Google App Engine. Multiple commercial and open source implementations of CFML engines are available, including Adobe ColdFusion, Lucee, New Atlanta BlueDragon (who offer both a Java-based and a .NET-based version), Railo, and Open BlueDragon as well as other CFML server engines.",
      appeared: "1995-01-01",
    },
    { name: "COMAL 80", appeared: "1980-01-01" },
    {
      name: "Common Lisp",
      description:
        "Common Lisp (CL) is a dialect of the Lisp programming language, published in ANSI standard document ANSI INCITS 226-1994 (S20018) (formerly X3.226-1994 (R1999)). The Common Lisp HyperSpec, a hyperlinked HTML version, has been derived from the ANSI Common Lisp standard. The Common Lisp language was developed as a standardized and improved successor of Maclisp. By the early 1980s several groups were already at work on diverse successors to MacLisp: Lisp Machine Lisp (aka ZetaLisp), Spice Lisp, NIL and S-1 Lisp.",
      appeared: "1984-01-01",
    },
    {
      name: "Crystal",
      description:
        "Crystal is a general-purpose, object-oriented programming language, designed and developed by Ary Borenszweig, Juan Wajnerman, Brian Cardiff and more than 300 contributors. With syntax inspired by the language Ruby, it is a compiled language with static type-checking, but specifying the types of variables or method arguments is generally unneeded. Types are resolved by an advanced global type inference algorithm. Crystal is currently in active development. It is released as free and open-source software under the Apache License version 2.0.",
      appeared: "2014-06-19",
    },
    { name: "Curry" },
    { name: "Cython", appeared: "2007-06-28" },
    {
      name: "D",
      description:
        "D, also known as dlang, is a multi-paradigm system programming language created by Walter Bright at Digital Mars and released in 2001. Andrei Alexandrescu joined the design and development effort in 2007. Though it originated as a re-engineering of C++, D is a profoundly different language —features of D can be considered streamlined and expanded-upon ideas from C++, however D also draws inspiration from other high-level programming languages, notably Java, Python, Ruby, C#, and Eiffel.",
      appeared: "2001-12-08",
    },
    {
      name: "Dart",
      description:
        "Dart is a programming language designed for client development, such as for the web and mobile apps. It is developed by Google and can also be used to build server and desktop applications. It is an object-oriented, class-based, garbage-collected language with C-style syntax. It can compile to either machine code or JavaScript, and supports interfaces, mixins, abstract classes, reified generics and type inference.",
      appeared: "2011-10-10",
    },
    {
      name: "Delphi",
      description:
        "Delphi is a general-purpose programming language and a software product that uses the Delphi dialect of the Object Pascal programming language and provides an integrated development environment (IDE) for rapid application development of desktop, mobile, web, and console software, currently developed and maintained by Embarcadero Technologies. Delphi's compilers generate native code for Microsoft Windows, macOS, iOS, Android and Linux (x64).",
      appeared: "1995-01-01",
    },
    { name: "Dylan", appeared: "1992-01-01" },
    { name: "Eiffel", appeared: "1986-01-01" },
    { name: "ELAN", appeared: "1974-01-01" },
    {
      name: "Elixir",
      description:
        "Elixir is a functional, concurrent, high-level general-purpose programming language that runs on the BEAM virtual machine, which is also used to implement the Erlang programming language. Elixir builds on top of Erlang and shares the same abstractions for building distributed, fault-tolerant applications. Elixir also provides productive tooling and an extensible design. The latter is supported by compile-time metaprogramming with macros and polymorphism via protocols.",
      appeared: "2012-01-01",
    },
    {
      name: "Elm",
      description:
        'Elm is a domain-specific programming language for declaratively creating web browser-based graphical user interfaces. Elm is purely functional, and is developed with emphasis on usability, performance, and robustness. It advertises "no runtime exceptions in practice", made possible by the Elm compiler\'s static type checking.',
      appeared: "2012-03-30",
    },
    {
      name: "Emacs Lisp",
      description:
        "Emacs Lisp is a dialect of the Lisp programming language used as a scripting language by Emacs (a text editor family most commonly associated with GNU Emacs and XEmacs). It is used for implementing most of the editing functionality built into Emacs, the remainder being written in C, as is the Lisp interpreter. Emacs Lisp is also termed Elisp, although there is also an older, unrelated Lisp dialect with that name. Users of Emacs commonly write Emacs Lisp code to customize and extend Emacs.",
      appeared: "1985-01-01",
    },
    {
      name: "Erlang",
      description:
        "Erlang is a general-purpose, concurrent, functional high-level programming language, and a garbage-collected runtime system. The term Erlang is used interchangeably with Erlang/OTP, or Open Telecom Platform (OTP), which consists of the Erlang runtime system, several ready-to-use components (OTP) mainly written in Erlang, and a set of design principles for Erlang programs. The Erlang programming language has immutable data, pattern matching, and functional programming.",
      appeared: "1986-01-01",
    },
    { name: "Euphoria", appeared: "1993-01-01" },
    {
      name: "F#",
      description:
        "F# is a functional-first, general-purpose, strongly typed, multi-paradigm programming language that encompasses functional, imperative, and object-oriented programming methods. It is most often used as a cross-platform Common Language Infrastructure (CLI) language on .NET, but can also generate JavaScript and graphics processing unit (GPU) code. F# is developed by the F# Software Foundation, Microsoft and open contributors. An open source, cross-platform compiler for F# is available from the F# Software Foundation.",
      appeared: "2005-01-01",
    },
    { name: "Factor", appeared: "2003-01-01" },
    { name: "Forth", appeared: "1970-01-01" },
    {
      name: "Fortran",
      description:
        "Fortran is a general-purpose, compiled imperative programming language that is especially suited to numeric computation and scientific computing. Fortran was originally developed by IBM in the 1950s for scientific and engineering applications, and subsequently came to dominate scientific computing. It has been in use for over six decades in computationally intensive areas such as numerical weather prediction, finite element analysis, computational fluid dynamics, geophysics, computational physics, crystallography and computational chemistry.",
      appeared: "1957-01-01",
    },
    { name: "FP", appeared: "1977-01-01" },
    { name: "FreeBASIC", appeared: "2004-01-01" },
    { name: "Gambas", appeared: "1999-01-01" },
    { name: "Game Maker Language", appeared: "1999-11-15" },
    { name: "GLBasic", appeared: "2000-01-01" },
    {
      name: "Go",
      description:
        "Go is a statically typed, compiled high-level programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency. It is often referred to as Golang because of its former domain name, golang.org, but its proper name is Go.",
      appeared: "2009-11-10",
    },
    { name: "Gosu", appeared: "2010-01-01" },
    { name: "GraphTalk" },
    {
      name: "Groovy",
      description:
        "Apache Groovy is a Java-syntax-compatible object-oriented programming language for the Java platform. It is both a static and dynamic language with features similar to those of Python, Ruby, and Smalltalk. It can be used as both a programming language and a scripting language for the Java Platform, is compiled to Java virtual machine (JVM) bytecode, and interoperates seamlessly with other Java code and libraries. Groovy uses a curly-bracket syntax similar to Java's. Groovy supports closures, multiline strings, and expressions embedded in strings.",
      appeared: "2003-01-01",
    },
    { name: "Harbour", appeared: "1999-01-01" },
    {
      name: "Haskell",
      description:
        "Haskell is a general-purpose, statically-typed, purely functional programming language with type inference and lazy evaluation. Designed for teaching, research and industrial applications, Haskell has pioneered a number of programming language features such as type classes, which enable type-safe operator overloading, and monadic IO. Haskell's main implementation is the Glasgow Haskell Compiler (GHC). It is named after logician Haskell Curry.",
      appeared: "1990-01-01",
    },
    { name: "Haxe", appeared: "2005-11-14" },
    { name: "HyperNext" },
    { name: "HyperTalk", appeared: "1987-01-01" },
    { name: "Io", appeared: "2002-01-01" },
    { name: "IPL", appeared: "1956-01-01" },
    { name: "ISLISP", appeared: "1990-01-01" },
    { name: "J", appeared: "1990-01-01" },
    { name: "JADE", appeared: "1996-01-01" },
    {
      name: "Java",
      description:
        "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture.",
      appeared: "1995-05-23",
    },
    {
      name: "JavaScript",
      description:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions.",
      appeared: "1995-12-04",
    },
    { name: "Joy", appeared: "2001-01-01" },
    {
      name: "jq",
      description:
        'jq is a very high-level lexically-scoped functional programming language in which every JSON value is a constant. jq supports backtracking and managing indefinitely long streams of JSON data. It is related to the Icon and Haskell programming languages. The language supports a namespace-based module system, and has some support for closures. In particular, functions and functional expressions can be used as parameters of other functions. The original implementation of jq was in C; gojq is a "Pure Go" implementation.',
      appeared: "2012-08-21",
    },
    {
      name: "Julia",
      description:
        'Julia is a high-level, dynamic programming language. Its features are well suited for numerical analysis and computational science. Distinctive aspects of Julia\'s design include a type system with parametric polymorphism in a dynamic programming language; with multiple dispatch as its core programming paradigm. Julia supports concurrent, (composable) parallel and distributed computing (with or without using MPI or the built-in corresponding[clarification needed] to "OpenMP-style" threads), and direct calling of C and Fortran libraries without glue code.',
      appeared: "2012-01-01",
    },
    { name: "K", appeared: "1993-01-01" },
    {
      name: "Kotlin",
      description:
        "Kotlin is a cross-platform, statically typed, general-purpose high-level programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library,[failed verification] but type inference allows its syntax to be more concise. Kotlin mainly targets the JVM, but also compiles to JavaScript (e.g., for frontend web applications using React) or native code via LLVM (e.g., for native iOS apps sharing business logic with Android apps).",
      appeared: "2011-07-22",
    },
    { name: "Ksh", appeared: "1983-01-01" },
    { name: "LabVIEW (G)", appeared: "1986-01-01" },
    {
      name: "LFE",
      description:
        "Lisp Flavored Erlang (LFE) is a functional, concurrent, garbage collected, general-purpose programming language and Lisp dialect built on Core Erlang and the Erlang virtual machine (BEAM). LFE builds on Erlang to provide a Lisp syntax for writing distributed, fault-tolerant, soft real-time, non-stop applications. LFE also extends Erlang to support metaprogramming with Lisp macros and an improved developer experience with a feature-rich read-eval-print loop (REPL). LFE is actively supported on all recent releases of Erlang.",
      appeared: "2008-01-01",
    },
    { name: "Linden Scripting Language (LSL)" },
    { name: "Lisp", appeared: "1960-01-01" },
    { name: "LiveCode", appeared: "2001-07-11" },
    { name: "Logtalk", appeared: "1998-01-01" },
    {
      name: "Lua",
      description:
        "Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications. Lua is cross-platform, since the interpreter of compiled bytecode is written in ANSI C, and Lua has a relatively simple C API to embed it into applications. Lua originated in 1993 as a language for extending software applications to meet the increasing demand for customization at the time.",
      appeared: "1993-01-01",
    },
    { name: "Maple", appeared: "1982-01-01" },
    { name: "Mathematica", appeared: "1988-06-23" },
    { name: "MATLAB", appeared: "1979-02-01" },
    { name: "Modula-2", appeared: "1978-01-01" },
    { name: "Modula-3", appeared: "1988-01-01" },
    { name: "MUMPS (M)", appeared: "1966-01-01" },
    {
      name: "Nim",
      description:
        'Nim is a general-purpose, multi-paradigm, statically typed, compiled systems programming language, designed and developed by a team around Andreas Rumpf. Nim is designed to be "efficient, expressive, and elegant", supporting metaprogramming, functional, message passing, procedural, and object-oriented programming styles by providing several features such as compile time code generation, algebraic data types, a foreign function interface (FFI) with C, C++, Objective-C, and JavaScript, and supporting compiling to those same languages as intermediate representations.',
      appeared: "2008-01-01",
    },
    { name: "Oberon", appeared: "1987-01-01" },
    { name: "Object Pascal", appeared: "1986-01-01" },
    {
      name: "Objective-C",
      description:
        "Objective-C is a general-purpose, object-oriented programming language that adds Smalltalk-style messaging to the C programming language. Originally developed by Brad Cox and Tom Love in the early 1980s, it was selected by NeXT for its NeXTSTEP operating system. Due to Apple macOS’s direct lineage from NeXTSTEP, Objective-C was the standard programming language used, supported, and promoted by Apple for developing macOS and iOS applications (via their respective APIs, Cocoa and Cocoa Touch) until the introduction of the Swift programming language in 2014.",
      appeared: "1984-01-01",
    },
    {
      name: "OCaml",
      description:
        "OCaml is a general-purpose, multi-paradigm programming language which extends the Caml dialect of ML with object-oriented features. OCaml was created in 1996 by Xavier Leroy, Jérôme Vouillon, Damien Doligez, Didier Rémy, Ascánder Suárez, and others. The OCaml toolchain includes an interactive top-level interpreter, a bytecode compiler, an optimizing native code compiler, a reversible debugger, and a package manager (OPAM). OCaml was initially developed in the context of automated theorem proving.",
      appeared: "1996-01-01",
    },
    { name: "occam", appeared: "1983-01-01" },
    { name: "Opa", appeared: "2011-01-01" },
    { name: "OpenLisp", appeared: "1988-04-01" },
    { name: "Oxygene", appeared: "2005-01-01" },
    { name: "Oz-Mozart", appeared: "1991-01-01" },
    { name: "Pascal", appeared: "1970-01-01" },
    {
      name: "Perl",
      description:
        'Perl is a family of two high-level, general-purpose, interpreted, dynamic programming languages. "Perl" refers to Perl 5, but from 2000 to 2019 it also referred to its redesigned "sister language", Perl 6, before the latter\'s name was officially changed to Raku in October 2019. Though Perl is not officially an acronym, there are various backronyms in use, including "Practical Extraction and Reporting Language". Perl was developed by Larry Wall in 1987 as a general-purpose Unix scripting language to make report processing easier.',
      appeared: "1987-12-18",
    },
    {
      name: "Pharo",
      description:
        "Pharo is an open source, cross-platform implementation of the classic Smalltalk-80 programming language and runtime. It's based on the OpenSmalltalk virtual machine called Cog (VM), which evaluates a dynamic, reflective, and object-oriented programming language with a syntax closely resembling Smalltalk-80. Pharo is shipped with a source code compiled into a system image that contains all software necessary to run Pharo system.",
      appeared: "2008-01-01",
    },
    {
      name: "PHP",
      description:
        "PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by The PHP Group. PHP was originally an abbreviation of Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor. PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or as a Common Gateway Interface (CGI) executable.",
      appeared: "1995-06-08",
    },
    { name: "PL/I", appeared: "1964-01-01" },
    {
      name: "PL/SQL",
      description:
        "PL/SQL (Procedural Language for SQL) is Oracle Corporation's procedural extension for SQL and the Oracle relational database. PL/SQL is available in Oracle Database (since version 6 - stored PL/SQL procedures/functions/packages/triggers since version 7), Times Ten in-memory database (since version 11.2.1), and IBM Db2 (since version 9.7). Oracle Corporation usually extends PL/SQL functionality with each successive release of the Oracle Database. PL/SQL includes procedural language elements such as conditions and loops.",
      appeared: "1995-01-01",
    },
    { name: "Plus", appeared: "1976-01-01" },
    { name: "PostScript", appeared: "1982-01-01" },
    { name: "PowerShell", appeared: "2006-11-14" },
    {
      name: "Prolog",
      description:
        "Prolog is a logic programming language associated with artificial intelligence and computational linguistics. Prolog has its roots in first-order logic, a formal logic, and unlike many other programming languages, Prolog is intended primarily as a declarative programming language: the program logic is expressed in terms of relations, represented as facts and rules. A computation is initiated by running a query over these relations.",
      appeared: "1972-01-01",
    },
    { name: "PureBasic", appeared: "1998-01-01" },
    {
      name: "PureScript",
      description:
        "PureScript is a strongly-typed, purely-functional programming language that transpiles to JavaScript, C++11, Go. It can be used to develop web applications, server side apps, and also desktop applications with use of Electron or via C++11 and Go compilers with suitable libraries. Its syntax is mostly comparable to that of Haskell. In addition, it introduces row polymorphism and extensible records. Also, contrary to Haskell, PureScript adheres to a strict evaluation strategy.",
      appeared: "2013-01-01",
    },
    {
      name: "Python",
      description:
        'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.',
      appeared: "1991-02-20",
    },
    {
      name: "R",
      description:
        "R is a programming language for statistical computing and graphics supported by the R Core Team and the R Foundation for Statistical Computing. Created by statisticians Ross Ihaka and Robert Gentleman, R is used among data miners, bioinformaticians and statisticians for data analysis and developing statistical software. Users have created packages to augment the functions of the R language. According to user surveys and studies of scholarly literature databases, R is one of the most commonly used programming languages in data mining.",
      appeared: "1993-08-01",
    },
    {
      name: "Racket",
      description:
        "Racket is a general-purpose, multi-paradigm programming language and a multi-platform distribution that includes the Racket language, compiler, large standard library, IDE, development tools, and a set of additional languages including Typed Racket (a sister language of Racket with a static type-checker), Swindle, FrTime, Lazy Racket, R5RS & R6RS Scheme, Scribble, Datalog, Racklog, Algol 60 and several teaching languages. The Racket language is a modern dialect of Lisp and a descendant of Scheme.",
      appeared: "1995-01-01",
    },
    {
      name: "Raku",
      description:
        "Raku is a member of the Perl family of programming languages. Formerly known as Perl 6, it was renamed in October 2019. Raku introduces elements of many modern and historical languages. Compatibility with Perl was not a goal, though a compatibility mode is part of the specification. The design process for Raku began in 2000.",
      appeared: "2015-12-25",
    },
    { name: "REALbasic", appeared: "1998-01-01" },
    {
      name: "Reason",
      description:
        "Reason, also known as ReasonML, is a syntax extension and toolchain for OCaml created by Jordan Walke, who also created React, at Facebook. Reason offers a syntax familiar to JavaScript programmers, and compiles to native code using OCaml's compiler toolchain. Reason code may also be compiled to JavaScript using the ReScript compiler. The Reason community officially provides ReasonReact as a solution for React based web applications.",
      appeared: "2016-05-16",
    },
    { name: "Rebol", appeared: "1997-01-01" },
    {
      name: "Red",
      description:
        "Red is a programming language designed to overcome the limitations of the programming language Rebol. Red was introduced in 2011 by Nenad Rakočević, and is both an imperative and functional programming language. Its syntax and general usage overlaps that of the interpreted Rebol language. The implementation choices of Red intend to create a full stack programming language: Red can be used for extremely high-level programming (DSLs and GUIs) as well as low-level programming (operating systems and device drivers).",
      appeared: "2011-01-01",
    },
    { name: "Rexx", appeared: "1979-01-01" },
    { name: "Ring", appeared: "2016-01-25" },
    { name: "RPG", appeared: "1959-01-01" },
    {
      name: "Ruby",
      description:
        'Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. Ruby is dynamically typed and uses garbage collection and just-in-time compilation. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.',
      appeared: "1995-01-01",
    },
    {
      name: "Rust",
      description:
        'Rust is a multi-paradigm, high-level, general-purpose programming language. Rust emphasizes performance, type safety, and concurrency. Rust enforces memory safety—that is, that all references point to valid memory—without requiring the use of a garbage collector or reference counting present in other memory-safe languages. To simultaneously enforce memory safety and prevent concurrent data races, Rust\'s "borrow checker" tracks the object lifetime of all references in a program during compilation.',
      appeared: "2010-07-07",
    },
    { name: "S-Lang", appeared: "1992-01-01" },
    { name: "S", appeared: "1976-01-01" },
    {
      name: "Scala",
      description:
        "Scala is a strong statically typed high-level general-purpose programming language that supports both object-oriented programming and functional programming. Designed to be concise, many of Scala's design decisions are aimed to address criticisms of Java. Scala source code can be compiled to Java bytecode and run on a Java virtual machine (JVM). Scala can also be compiled to JavaScript to run in a browser, or directly to a native executable.",
      appeared: "2004-01-20",
    },
    {
      name: "Scheme",
      description:
        "Scheme is a dialect of the Lisp family of programming languages. Scheme was created during the 1970s at the MIT AI Lab and released by its developers, Guy L. Steele and Gerald Jay Sussman, via a series of memos now known as the Lambda Papers. It was the first dialect of Lisp to choose lexical scope and the first to require implementations to perform tail-call optimization, giving stronger support for functional programming and associated techniques such as recursive algorithms.",
      appeared: "1975-01-01",
    },
    { name: "Seed7", appeared: "2005-01-01" },
    { name: "Simula", appeared: "1962-01-01" },
    { name: "Small Basic", appeared: "2008-10-23" },
    { name: "Smalltalk", appeared: "1972-01-01" },
    { name: "SNOBOL", appeared: "1962-01-01" },
    {
      name: "Standard ML",
      description:
        "Standard ML (SML) is a general-purpose, modular, functional programming language with compile-time type checking and type inference. It is popular among compiler writers and programming language researchers, as well as in the development of theorem provers. Standard ML is a modern dialect of ML, the language used in the Logic for Computable Functions (LCF) theorem-proving project. It is distinctive among widely used languages in that it has a formal specification, given as typing rules and operational semantics in The Definition of Standard ML.",
      appeared: "1983-01-01",
    },
    {
      name: "Swift",
      description:
        "Swift is a high-level general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. First released in 2014, Swift was developed as a replacement for Apple's earlier programming language Objective-C, as Objective-C had been largely unchanged since the early 1980s and lacked modern language features.",
      appeared: "2014-06-02",
    },
    {
      name: "Tcl",
      description:
        "Tcl is a high-level, general-purpose, interpreted, dynamic programming language. It was designed with the goal of being very simple but powerful. Tcl casts everything into the mold of a command, even programming constructs like variable assignment and procedure definition. Tcl supports multiple programming paradigms, including object-oriented, imperative and functional programming or procedural styles. It is commonly used embedded into C applications, for rapid prototyping, scripted applications, GUIs, and testing.",
      appeared: "1988-01-01",
    },
    {
      name: "TypeScript",
      description:
        "TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). Multiple options are available for transpilation.",
      appeared: "2012-10-01",
    },
    {
      name: "Visual Basic .NET",
      description:
        'Visual Basic (VB), originally called Visual Basic .NET (VB.NET), is a multi-paradigm, object-oriented programming language, implemented on .NET, Mono, and the .NET Framework. Microsoft launched VB.NET in 2002 as the successor to its original Visual Basic language, the last version of which was Visual Basic 6.0. Although the ".NET" portion of the name was dropped in 2005, "Visual Basic .NET" refers to all Visual Basic languages released since 2002, in order to distinguish between them and the classic Visual Basic.',
      appeared: "2001-01-01",
    },
    { name: "Visual Basic", appeared: "1991-05-01" },
    { name: "Visual FoxPro", appeared: "1992-01-01" },
    { name: "Visual Prolog" },
    {
      name: "WebAssembly",
      description:
        "WebAssembly (sometimes abbreviated Wasm) defines a portable binary-code format and a corresponding text format for executable programs as well as software interfaces for facilitating interactions between such programs and their host environment. The main goal of WebAssembly is to enable high-performance applications on web pages, but it does not make any Web-specific assumptions or provide Web-specific features, so it can be employed in other environments as well.",
      appeared: "2017-03-01",
    },
    { name: "Wolfram Language", appeared: "1988-01-01" },
    {
      name: "x86-64 Assembly",
      description:
        "x86 assembly language is the name for the family of assembly languages which provide some level of backward compatibility with CPUs back to the Intel 8008 microprocessor, which was launched in April 1972. It is used to produce object code for the x86 class of processors. Regarded as a programming language, assembly is machine-specific and low-level. Like all assembly languages, x86 assembly uses mnemonics to represent fundamental CPU instructions, or machine code.",
      appeared: "1972-01-01",
    },
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
    { languageName: "COBOL", purposeName: "Application" },
    { languageName: "COBOL", purposeName: "Business" },
    { languageName: "CoffeeScript", purposeName: "Scripting" },
    { languageName: "ColdFusion (CFML)", purposeName: "Web" },
    { languageName: "Common Lisp", purposeName: "General" },
    { languageName: "Crystal", purposeName: "General" },
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
    { languageName: "COBOL", paradigmName: "Imperative" },
    { languageName: "COBOL", paradigmName: "Object-oriented" },
    { languageName: "COBOL", paradigmName: "Procedural" },
    { languageName: "CoffeeScript", paradigmName: "Imperative" },
    { languageName: "CoffeeScript", paradigmName: "Functional" },
    { languageName: "CoffeeScript", paradigmName: "Prototype-based" },
    { languageName: "ColdFusion (CFML)", paradigmName: "Object-oriented" },
    { languageName: "ColdFusion (CFML)", paradigmName: "Procedural" },
    { languageName: "Common Lisp", paradigmName: "Imperative" },
    { languageName: "Common Lisp", paradigmName: "Object-oriented" },
    { languageName: "Common Lisp", paradigmName: "Functional" },
    { languageName: "Common Lisp", paradigmName: "Procedural" },
    { languageName: "Common Lisp", paradigmName: "Generic" },
    { languageName: "Common Lisp", paradigmName: "Reflective" },
    { languageName: "Common Lisp", paradigmName: "Event-driven" },
    { languageName: "Common Lisp", paradigmName: "Concurrent" },
    { languageName: "Common Lisp", paradigmName: "Array-oriented" },
    { languageName: "Common Lisp", paradigmName: "Extensible" },
    { languageName: "Common Lisp", paradigmName: "Syntactic macros" },
    { languageName: "Common Lisp", paradigmName: "Multiple dispatch" },
    { languageName: "Crystal", paradigmName: "Imperative" },
    { languageName: "Crystal", paradigmName: "Object-oriented" },
    { languageName: "Crystal", paradigmName: "Functional" },
    { languageName: "Crystal", paradigmName: "Procedural" },
  ]);
};
