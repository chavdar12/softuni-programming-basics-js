function projectsCreation(input) {
    const name = input[0].trim();
    const projects = Number(input[1]);
    console.log(
        `The architect ${name} will need ${projects * 3} hours to complete ${projects} project/s.`,
    );
}

module.exports = projectsCreation;
