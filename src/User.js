class User{
    constructor(firstName, lastName,username,email, birthDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.birthDate = birthDate;
        this.appDownloaded = false;
    }
    setAppDownloaded(status){
        if(typeof(status) === 'boolean'){
            this.appDownloaded = status;
        }else{
            throw new Error('Download Status not to be T/F');
        }
    }
    isAppDownload(){
        return this.appDownloaded;
    }
    static isOfAgeToRent(dob){
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    static isEmailValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}
module.exports = User;