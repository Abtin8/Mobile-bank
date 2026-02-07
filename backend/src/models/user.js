class User {
    constructor({ id, fullName, username, nationalId, cardNumber, password, balance }) {
        this.id = id;
        this.fullName = fullName;
        this.username = username;
        this.nationalId = nationalId;
        this.cardNumber = cardNumber;
        this.password = password;
        this.balance = balance || 0;
    }

    toJSON() {
        return {
            id: this.id,
            fullName: this.fullName,
            username: this.username,
            nationalId: this.nationalId,
            cardNumber: this.cardNumber,
            balance: this.balance
        };
    }
}

export default User;