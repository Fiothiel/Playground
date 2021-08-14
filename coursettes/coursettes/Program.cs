using System;
using System.Collections.Generic;

namespace coursettes
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Let's find a winner of The Couresttes Summer Challenge 2021!");                        

            var entries = new List<Entry>();

            string path = "C:/Users/tina_/source/repos/coursettes/Test.csv";

            string[] lines = System.IO.File.ReadAllLines(path);
            foreach (string line in lines)
            {
                var split = line.Split(';');
                entries.Add(new Entry()
                {
                    Name = split[0],
                    Trick = split[1]
                });
            }

            var random = new Random();
            var index = random.Next(entries.Count);

            Console.Write("Press any key to find a winner..");
            Console.ReadLine();

            if (entries[index] != null)
            {
                Console.WriteLine("THE WINNER IS:");
                Console.WriteLine($"{entries[index].Name} with trick number {entries[index].Trick}!");
            }
        }
    }
    public class Entry
    {
        public string Name { get; set; }
        public string Trick { get; set; }
    }
}
