using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practice
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Car obj = new Car();
            string color=obj.color;
            Console.WriteLine($"Car color is = {color}");

            Console.ReadLine();

        }
    }
}
