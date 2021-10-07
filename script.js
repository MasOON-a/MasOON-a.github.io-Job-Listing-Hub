// Generate Postings from JSON File
fetch('./data.json')
.then(respond => {
    return respond.json();
}).then((data) => {
    jobListingObjects = data;
    data.forEach((listing) => {
        const listingContainer = document.querySelector('#listings-container');
        // Job Listing Cell
        const jobElement = document.createElement('div');
        jobElement.classList.add('job-element');
        listingContainer.appendChild(jobElement);
        // Job Listing Cell Img
        const imgCont = document.createElement('div');
        imgCont.innerHTML = '<img src=\"' + listing.logo + '\"></img>';
        imgCont.classList.add('img-container');
        jobElement.appendChild(imgCont);
        // Container for Desktop
        const infoContainer = document.createElement('div');
        jobElement.appendChild(infoContainer);
        // Company Container
        const companyCont = document.createElement('div');
        companyCont.classList.add('company-container');
        infoContainer.appendChild(companyCont);
        // Company Container (name)
        const companyName = document.createElement('p');
        companyName.innerText = listing.company;
        companyCont.appendChild(companyName);
        // Company Container (new/featured);
        if(listing.new){
            const companyTag = document.createElement('p');
            companyTag.innerText = 'NEW!';
            companyTag.classList.add('company-tag');
            companyTag.classList.add('n');
            companyCont.appendChild(companyTag);
        }
        if(listing.featured){
            const companyTag = document.createElement('p');
            companyTag.innerText = 'FEATURED';
            companyTag.classList.add('company-tag');
            companyTag.classList.add('f');
            companyCont.appendChild(companyTag);
            jobElement.classList.add('featured');

        }
        // Listing Title
        const listingTitle = document.createElement('h1');
        listingTitle.classList.add('listing-title');
        listingTitle.innerText = listing.position;
        infoContainer.appendChild(listingTitle);
        // Listing Info Container
        const listingInfoCont = document.createElement('div');
        listingInfoCont.classList.add('listing-info-container');
        listingInfoCont.innerHTML = listing.postedAt + '<span> </span>' + listing.contract + '<span> </span>' + listing.location;
        infoContainer.appendChild(listingInfoCont);
        // Horizontal Line
        const line = document.createElement('hr');
        jobElement.appendChild(line);
        // Listing Requirement Tags
        const tagCont = document.createElement('div');
        tagCont.classList.add('tag-container');
        tagCont.addEventListener('click', (click) => {
            if(click.target.classList[0] === 'tag'){
                const tagSearch = document.querySelector('.tag-search');
                const userClick = click.target;
                let match = false;
                for(let x = 0; x < tagSearch.children.length; x++){
                    if(tagSearch.children[x].innerText === userClick.innerText){
                        match = true;
                    }
                }
                if(!match){
                    const newTag = document.createElement('div');
                    newTag.classList.add('tagSearch-tag');
                    const newTagText = document.createElement('p');
                    newTagText.innerText = userClick.innerText;
                    newTag.appendChild(newTagText);
                    const newTagClose = document.createElement('i');
                    newTagClose.classList.add('fas', 'fa-times');
                    newTagClose.addEventListener('click', (click) => { // remove tag from search container when x is clicked
                        click.target.parentElement.remove();
                        searchTag();
                    })

                    newTag.appendChild(newTagClose);
                    tagSearch.appendChild(newTag);
                    searchTag(userClick.innerText);
                }
            }
        });
        jobElement.appendChild(tagCont);
        // Listing Requirement Tags (role)
        const roleTag = document.createElement('p');
        roleTag.classList.add('tag');
        roleTag.innerText = listing.role;
        tagCont.appendChild(roleTag);
        // Listing Requirement Tags (level)
        const levelTag = document.createElement('p');
        levelTag.classList.add('tag');
        levelTag.innerText = listing.level;
        tagCont.appendChild(levelTag);
        // Listing Requirement Tags (languages / tools)
        listing.languages.forEach((lang) => {
            const langTag = document.createElement('p');
            langTag.classList.add('tag');
            langTag.innerText = lang;
            tagCont.appendChild(langTag);
        })
        listing.tools.forEach((role) => {
            const roleTag = document.createElement('p');
            roleTag.classList.add('tag');
            roleTag.innerText = role;
            tagCont.appendChild(roleTag);
        })
    }
    )
}).catch(err => {
    console.log('Error: ' + err);
})

// Functions
function searchTag () {
    // Tag Search Logic 
    // loop through listings, for each tag container of each listing: 
    // itterate through each tag child in the tag search. if the tag from tagSearch is found to be in the listings tag container, append true boolean to array
    // after all tags inside tagSearch has been searched in the listings tag container, there will be an array with a number of boolean values
    // loop through array, if any value is false, turn listing to display none
    const listingContainer = document.getElementById('listings-container');
    const tagSearch = document.querySelector('.tag-search');
    for(let x = 0; x < listingContainer.children.length; x++){ // loop through listings on page
        let tagMatch = [];
        for(let z = 0; z < tagSearch.children.length; z++){ // loop through tags in tagSearch
            const tagContainer = listingContainer.children[x].querySelector('.tag-container');
            for(let y = 0; y < tagContainer.children.length; y++){ // loop through tags in specific listing
                if(tagContainer.children[y].innerText === tagSearch.children[z].innerText){
                    tagMatch.push(true);
                    break;
                }else if (y + 1 === tagContainer.children.length){
                    tagMatch.push(false);
                }
            }
        }
        if(tagMatch.indexOf(false) != -1){
            listingContainer.children[x].style.display = 'none';
        }else{
            listingContainer.children[x].removeAttribute(style);
        }
    }

    // clear button visibility
    if (tagSearch.children.length != 0){
        const clearCont =  document.querySelector('.clear-container');
        clearCont.style.display = 'block';
    }else{
        const clearCont =  document.querySelector('.clear-container');
        clearCont.style.display = 'none';
    }
}
function clearTags() {
    const tagSearch = document.querySelector('.tag-search');
    tagSearch.innerHTML = '';
}