function solution(id_list, report, k) {
    const answer = [];
    const users = {};
    const banUsers = {};
    const reportSet = new Set(report);
    
    id_list.forEach(id => {
        users[id] = 0;
        banUsers[id] = 0;
    });
    
    for (let report of reportSet) {
        const [reporter, badPerson] = report.split(' ');
        banUsers[badPerson] += 1;
    }
    
    for (let report of reportSet) {
        const [reporter, badPerson] = report.split(' ');
        if (banUsers[badPerson] >= k) {
            users[reporter] += 1;
        }
    }
    
    for (let user in users) {
        answer.push(users[user]);
    }
    
    return answer;
}