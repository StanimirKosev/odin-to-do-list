// start with the inbox button

function sidebar(){
    const sidebar = document.querySelector('.sidebar');

    const inbox = document.createElement('button');
    inbox.textContent = "Inbox";
    sidebar.appendChild(inbox).className = 'inboxBtn';

    const todayTodo = document.createElement('button');
    todayTodo.textContent = "Today";
    sidebar.appendChild(todayTodo).className = 'todayTodo';

    const weekTodo = document.createElement('button');
    weekTodo.textContent = 'This Week';
    sidebar.appendChild(weekTodo).className = 'weekTodo';

    const projects = document.createElement('div');
    projects.textContent = 'Projects';
    sidebar.appendChild(projects).className = 'projects';

    const listProjects = document.createElement('div');
    sidebar.appendChild(listProjects).className = 'listProjects';

    const addProject = document.createElement('button'); 
    addProject.textContent = '+ Add Project';
    addProject.setAttribute('data-modal-target','#modal'); // 2nd button targeting modal ( the form element )
    sidebar.appendChild(addProject).className = 'addProject';
 
}
function makeProject(){
    const listProjects = document.querySelector('.listProjects')
    let title = document.getElementById('title').value;
    
    const actualProject = document.createElement('button');
    listProjects.appendChild(actualProject).className = 'actualProject';

    const titleProject = document.createElement('div');
    titleProject.textContent = title;
    actualProject.appendChild(titleProject);

    const rmvProject = document.createElement('button');
    rmvProject.textContent = 'X';
    actualProject.appendChild(rmvProject).className = 'rmvProject';

    for ( let i = 0 ; i < listProjects.children.length ; i++){
        actualProject.setAttribute('data-pj-index',i);
    }
    
}

export { sidebar , makeProject };