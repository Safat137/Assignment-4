let thrivingList = [];
let strugglingList = []
let currentStatus = 'all'

let total = document.getElementById('total');
let thrivingCount = document.getElementById('thrivingCount')
let strugglingCount = document.getElementById('strugglingCount');
let jobCount = document.getElementById('jobCount')

const allFilterBtn = document.getElementById('all-filter-btn')
const thrivingFilterBtn = document.getElementById('thriving-filter-btn')
const strugglingFilterBtn = document.getElementById('struggling-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')


function calculateCount() {

    let count = allCardSection.children.length

    total.innerText = count
    thrivingCount.innerText = thrivingList.length
    strugglingCount.innerText = strugglingList.length

    jobCount.innerText = count + (count === 1 ? " Job" : " Jobs")
}

calculateCount()



function toggleStyle(id) {

    allFilterBtn.classList.add('bg-gray-300', 'text-black')
    thrivingFilterBtn.classList.add('bg-gray-300', 'text-black')
    strugglingFilterBtn.classList.add('bg-gray-300', 'text-black')

    allFilterBtn.classList.remove('bg-black', 'text-white')
    thrivingFilterBtn.classList.remove('bg-black', 'text-white')
    strugglingFilterBtn.classList.remove('bg-black', 'text-white')

    const selected = document.getElementById(id)

    currentStatus = id

    selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-blue-500', 'text-white')


    if (id == 'thriving-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderThriving()

    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')

    } else if (id == 'struggling-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderStruggling()
    }
}



mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('thriving-btn')) {

        const parentNode = event.target.closest('.card')

        const plantName = parentNode.querySelector('.plantName').innerText
        const position = parentNode.querySelectorAll('.latinName')[0].innerText
        const salary = parentNode.querySelectorAll('.latinName')[1].innerText
        const light = parentNode.querySelector('.light').innerText
        const water = parentNode.querySelector('.water').innerText
        const notes = parentNode.querySelector('.notes').innerText

        parentNode.querySelector('.status').innerText = 'Interview'

        const cardInfo = {
            plantName,
            position,
            salary,
            light,
            water,
            status: 'Interview',
            notes
        }

        const exist = thrivingList.find(item => item.plantName === plantName)

        if (!exist) {
            thrivingList.push(cardInfo)
        }

        strugglingList = strugglingList.filter(item => item.plantName !== plantName)

        if (currentStatus === 'struggling-filter-btn') {
            renderStruggling()
        }

        calculateCount()

    }



    else if (event.target.classList.contains('struggling-btn')) {

        const parentNode = event.target.closest('.card')

        const plantName = parentNode.querySelector('.plantName').innerText
        const position = parentNode.querySelectorAll('.latinName')[0].innerText
        const salary = parentNode.querySelectorAll('.latinName')[1].innerText
        const light = parentNode.querySelector('.light').innerText
        const water = parentNode.querySelector('.water').innerText
        const notes = parentNode.querySelector('.notes').innerText

        parentNode.querySelector('.status').innerText = 'Rejected'

        const cardInfo = {
            plantName,
            position,
            salary,
            light,
            water,
            status: 'Rejected',
            notes
        }

        const exist = strugglingList.find(item => item.plantName === plantName)

        if (!exist) {
            strugglingList.push(cardInfo)
        }

        thrivingList = thrivingList.filter(item => item.plantName !== plantName)

        if (currentStatus === 'thriving-filter-btn') {
            renderThriving()
        }

        calculateCount()
    }



    else if (event.target.closest('.btn-delete')) {

        const parentNode = event.target.closest('.card');
        const plantName = parentNode.querySelector('.plantName').innerText;

        thrivingList = thrivingList.filter(item => item.plantName !== plantName);
        strugglingList = strugglingList.filter(item => item.plantName !== plantName);

        parentNode.remove();

        if(currentStatus === 'thriving-filter-btn') renderThriving();
        else if(currentStatus === 'struggling-filter-btn') renderStruggling();

        calculateCount();
    }

})



function renderThriving() {

    filterSection.innerHTML = ''

    if (thrivingList.length === 0) {

        filterSection.innerHTML = `
        <div class="text-center py-16">
          <img src="./jobs.png" class="mx-auto mb-4 w-20">
          <h3 class="text-xl font-semibold">No Jobs Available</h3>
          <p class="text-gray-500">Start applying to track your applications</p>
        </div>
        `
        return
    }


    for (let job of thrivingList) {

        let div = document.createElement('div')

        div.className = 'card flex justify-between border p-8'

        div.innerHTML = `
        <div class="space-y-6">

            <div>
                <p class="plantName text-4xl">${job.plantName}</p>
                <p class="latinName">${job.position}</p>
                <p class="latinName">${job.salary}</p>
            </div>

            <div class="flex gap-2">
                <p class="light bg-gray-200 px-5">${job.light}</p>
                <p class="water bg-gray-200 px-5">${job.water}</p>
            </div>

           <p class="status px-3 py-1 inline-block ${job.status === 'Interview' ? 'bg-gray-300 text-black' : job.status === 'Rejected' ? 'bg-red-200 text-black' : ''} rounded">${job.status}</p>
            <p class="notes">${job.notes}</p>

            <div class="flex gap-5">
                <button class="thriving-btn bg-green-200 px-4 py-2">Interview</button>
                <button class="struggling-btn bg-red-200 px-4 py-2">Rejected</button>
            </div>

        </div>

        <div>
            <button class="btn-delete"><img src="./Group 1.png"></button>
        </div>
        `

        filterSection.appendChild(div)
    }
}




function renderStruggling() {

    filterSection.innerHTML = ''

    if (strugglingList.length === 0) {

        filterSection.innerHTML = `
        <div class="text-center py-16">
          <img src="./jobs.png" class="mx-auto mb-4 w-20">
          <h3 class="text-xl font-semibold">No Jobs Available</h3>
          <p class="text-gray-500">Start applying to track your applications</p>
        </div>
        `
        return
    }


    for (let job of strugglingList) {

        let div = document.createElement('div')

        div.className = 'card flex justify-between border p-8'

        div.innerHTML = `
        <div class="space-y-6">

            <div>
                <p class="plantName text-4xl">${job.plantName}</p>
                <p class="latinName">${job.position}</p>
                <p class="latinName">${job.salary}</p>
            </div>

            <div class="flex gap-2">
                <p class="light bg-gray-200 px-5">${job.light}</p>
                <p class="water bg-gray-200 px-5">${job.water}</p>
            </div>

            <p class="status px-3 py-1 inline-block ${job.status === 'Interview' ? 'bg-gray-300 text-black' : job.status === 'Rejected' ? 'bg-red-200 text-black' : ''} rounded">${job.status}</p>
            <p class="notes">${job.notes}</p>

            <div class="flex gap-5">
                <button class="thriving-btn bg-green-200 px-4 py-2">Interview</button>
                <button class="struggling-btn bg-red-200 px-4 py-2">Rejected</button>
            </div>

        </div>

        <div>
            <button class="btn-delete"><img src="./Group 1.png"></button>
        </div>
        `

        filterSection.appendChild(div)
    }
}