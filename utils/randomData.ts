export class RandomData {

    static randomEmail() {
        return `user${Date.now()}@gmail.com`;
    }

    static randomName() {
        return `User${Math.floor(Math.random() * 10000)}`;
    }

}