Console.WriteLine("Hello, World!");

Type aType = typeof(A);
A? obj = (A?)Activator.CreateInstance(aType);
System.Console.WriteLine(obj?.GetType().Name);
