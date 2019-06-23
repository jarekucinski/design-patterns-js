const repo = function() {

    const _db = {};

    const get = function(id) {
        console.log('Getting project ' + id);
        return {
            name: 'new project from db'
        }
    }

    const save = function(project) {
        console.log('Saving ' + project.name + ' to the db');
    }

    return {
        get: get,
        save: save
    }
}

module.exports = repo();
