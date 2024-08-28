using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace masterRepo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string firstName = "Joy";
            string lastName = "Dhar";
            string fullName = $"My FullName is : {firstName} {lastName}";
            Console.WriteLine(fullName);
            Console.ReadKey();

        }
    }
}
