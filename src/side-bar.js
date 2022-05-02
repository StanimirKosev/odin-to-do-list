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
    addProject.setAttribute('data-modal-target-project','#sidebarModal'); // button targeting the sidebar modal
    sidebar.appendChild(addProject).className = 'addProject';

    sidebarModal();
    function sidebarModal(){
        const sidebarModal = document.createElement('form');
        sidebarModal.setAttribute("method", "post");
        sidebarModal.setAttribute("action", "");
        sidebarModal.setAttribute("id","sidebarModal"); // data attribute of the buttons will target this id
        sidebar.appendChild(sidebarModal);

        const pjTitle = document.createElement('input');
        pjTitle.setAttribute("type", "text");
        pjTitle.setAttribute("name", "title");
        pjTitle.setAttribute("placeholder", "Title");
        pjTitle.setAttribute("id","pjTitle");
        sidebarModal.appendChild(pjTitle);

    const addBtnSidebarModal = document.createElement('button'); 
    addBtnSidebarModal.setAttribute('type','button');
    addBtnSidebarModal.textContent = 'Add';
    sidebarModal.appendChild(addBtnSidebarModal).className = 'addBtnSidebarModal';

    const cancelProject = document.createElement('button');
    cancelProject.setAttribute('data-close-button-project','#sidebarModal'); // targets the modal ( form el )
    cancelProject.setAttribute('type','button');
    cancelProject.textContent = 'Cancel';
    sidebarModal.appendChild(cancelProject).className = 'cancelProject';

    addBtnSidebarModal.addEventListener('click', () =>{
        makeProject();
    })

    }

    
 
    function makeProject(){
        const listProjects = document.querySelector('.listProjects')
        let title = document.getElementById('pjTitle').value;
        
        saveProject();
        
        
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
     
        function saveProject(){
            let projectNum = 0; // different variable
            Object.keys(localStorage).forEach(function(key){
                projectNum++; // increments on each obj
            });

            let projecto = localStorage.setItem(projectNum,title);
            console.log(localStorage);
        }
    }
}

function pjRender(projectTitle){
    const inbox = document.querySelector('.inbox');

    const pjTitle = document.createElement('div');
    pjTitle.textContent = projectTitle;
    inbox.appendChild(pjTitle).className = 'pjTitle';

    /*const listObj = document.createElement('div');
    inbox.appendChild(listObj).className = 'listObj';*/
}


export { sidebar , pjRender };