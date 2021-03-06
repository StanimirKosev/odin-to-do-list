function sidebar(){
    const sidebar = document.querySelector('.sidebar'); // from page.js

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
    addProject.setAttribute('data-modal-target-project','#sidebarModal'); 
    sidebar.appendChild(addProject).className = 'addProject';

    sidebarModal(); 
    function sidebarModal(){
        const sidebarModal = document.createElement('form');
        sidebarModal.setAttribute("method", "post");
        sidebarModal.setAttribute("action", "");
        sidebarModal.setAttribute("id","sidebarModal"); 
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
        cancelProject.setAttribute('data-close-button-project','#sidebarModal'); 
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
        
        const actualProject = document.createElement('button');
        listProjects.appendChild(actualProject).className = 'actualProject';
    
        const titleProject = document.createElement('div');
        titleProject.textContent = title;
        actualProject.appendChild(titleProject).className = 'ifClickTitle';
    
        const rmvProject = document.createElement('button');
        rmvProject.textContent = 'X';
        actualProject.appendChild(rmvProject).className = 'rmvProject';
    
        for ( let i = 0 ; i < listProjects.children.length ; i++){
            actualProject.setAttribute('data-pj-index','project_'+i); // vulnerability- might overwrite existing localstorage items 
        }
        
        projectLocalStorage();
        function projectLocalStorage(){
            let key;
         
            let title_serialized = JSON.stringify(title);
    
            for ( let i = 0 ; i < listProjects.children.length ; i++){
                key = 'project_'+i; // vulnerability 
            }
    
            localStorage.setItem(key,title_serialized);
            title = document.getElementById('pjTitle').value = '';
        }
    }
}

function pjRender(title){
    const inbox = document.querySelector('.inbox');

    const pjTitle = document.createElement('div');
    pjTitle.textContent = title;
    inbox.appendChild(pjTitle).className = 'pjTitle';

    const listObj = document.createElement('div');
    inbox.appendChild(listObj).className = 'listObj';
}

function projectsRender(){
    for ( let i = 0 ; i < localStorage.length  ; i++ ){
        let key =  Object.keys(localStorage).sort()[i];
        if (key.includes('project')){
            let project_deserialized = JSON.parse(localStorage.getItem(key));
    
            const listProjects = document.querySelector('.listProjects')
        
            const actualProject = document.createElement('button');
            actualProject.setAttribute('data-pj-index',key);
            listProjects.appendChild(actualProject).className = 'actualProject';
        
            const titleProject = document.createElement('div');
            titleProject.textContent = project_deserialized;
            actualProject.appendChild(titleProject).className = 'ifClickTitle';
        
            const rmvProject = document.createElement('button');
            rmvProject.textContent = 'X';
            actualProject.appendChild(rmvProject).className = 'rmvProject';  
        }
    }
}


export { sidebar , pjRender , projectsRender };