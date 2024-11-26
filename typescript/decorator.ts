function classDecorator(target: Function) {
  console.log(`class ${target.name} is defined`);
}

function methodDecorator(
  target: any, // The prototype of the class
  propertyName: string, // The name of the method
  descriptor: PropertyDescriptor // The method descriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(
      `Method ${propertyName} is called with arguments: ${JSON.stringify(args)}`
    );
    const result = originalMethod.apply(this, args);
    console.log(`Method ${propertyName} returned: ${result}`);
    return result;
  };
}

@classDecorator
class DecoratorExample {
  constructor() {
    console.log("A class object is created");
  }

  @methodDecorator
  add(a: number, b: number): number {
    return a + b;
  }
}

const suheb = new DecoratorExample();
suheb.add(5, 6);
