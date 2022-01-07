module.exports = {
    getAge: (birthDateString) => {
        var today = new Date();
        var dateParts = birthDateString.split("/");
        var birthDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        var d = today.getDay() - birthDate.getDay();
        var m = today.getMonth() - birthDate.getMonth();
        var age = today.getFullYear() - birthDate.getFullYear();
        if (d < 0) {
            m--;
        }
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
  };