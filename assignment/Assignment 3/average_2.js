let studentsData = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

let result = Object.entries(studentsData).map(([student, subjects]) => {
    let scores = Object.values(subjects);
    let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return { [student]: { average: average } };
});

console.log(result);

