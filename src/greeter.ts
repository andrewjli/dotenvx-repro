class Greeter {
    public Greet() {
        console.log(`Hello, ${process.env.NAME}`);
    }
}

export const greeter = new Greeter();