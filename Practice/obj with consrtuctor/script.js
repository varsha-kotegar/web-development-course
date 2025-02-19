/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class WritingTool {
  constructor(name, color, type, inkColor, inkLevel) {
    this.name = name;
    this.color = color;
    this.type = type;
    this.inkColor = inkColor;
    this.inkLevel = inkLevel;
  }

  write(text) {
    console.log(`Writing: ${text}`);
    this.inkLevel -= text.length;
  }

  refill() {
    this.inkLevel = 100;
  }
}

const pen = new WritingTool("Pen", "Black", "Ballpoint", "Blue", 100);
const pencil = new WritingTool("Pencil", "Yellow", "Graphite", "Grey", 100);

console.log(pen);
console.log(pencil);
