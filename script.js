let interviewingList = [];
let rejectingList = []
let currentStatus = 'all'

let total = document.getElementById('total');
let interviewingCount = document.getElementById('interviewingCount')
let rejectingCount = document.getElementById('rejectingCount');
let jobCount = document.getElementById('jobCount')

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewingFilterBtn = document.getElementById('interviewing-filter-btn')
const rejectingFilterBtn = document.getElementById('rejecting-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')


function calculateCount() {

    let count = allCardSection.children.length

    total.innerText = count
    interviewingCount.innerText = interviewingList.length
    rejectingCount.innerText = rejectingList.length

    jobCount.innerText = count + (count === 1 ? " Job" : " Jobs")
}

calculateCount()



function toggleStyle(id) {

    allFilterBtn.classList.add('bg-gray-300', 'text-black')
    interviewingFilterBtn.classList.add('bg-gray-300', 'text-black')
    rejectingFilterBtn.classList.add('bg-gray-300', 'text-black')

    allFilterBtn.classList.remove('bg-black', 'text-white')
    interviewingFilterBtn.classList.remove('bg-black', 'text-white')
    rejectingFilterBtn.classList.remove('bg-black', 'text-white')

    const selected = document.getElementById(id)

    currentStatus = id

    selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-blue-500', 'text-white')


    if (id == 'interviewing-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderinterviewing()

    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')

    } else if (id == 'rejecting-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderrejecting()
    }
}



mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interviewing-btn')) {

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

        const exist = interviewingList.find(item => item.plantName === plantName)

        if (!exist) {
            interviewingList.push(cardInfo)
        }

        rejectingList = rejectingList.filter(item => item.plantName !== plantName)

        if (currentStatus === 'rejecting-filter-btn') {
            renderrejecting()
        }

        calculateCount()

    }



    else if (event.target.classList.contains('rejecting-btn')) {

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

        const exist = rejectingList.find(item => item.plantName === plantName)

        if (!exist) {
            rejectingList.push(cardInfo)
        }

        interviewingList = interviewingList.filter(item => item.plantName !== plantName)

        if (currentStatus === 'interviewing-filter-btn') {
            renderinterviewing()
        }

        calculateCount()
    }



    else if (event.target.closest('.btn-delete')) {

        const parentNode = event.target.closest('.card');
        const plantName = parentNode.querySelector('.plantName').innerText;

        interviewingList = interviewingList.filter(item => item.plantName !== plantName);
        rejectingList = rejectingList.filter(item => item.plantName !== plantName);

        parentNode.remove();

        if (currentStatus === 'interviewing-filter-btn') renderinterviewing();
        else if (currentStatus === 'rejecting-filter-btn') renderrejecting();

        calculateCount();
    }

})



function renderinterviewing() {

    filterSection.innerHTML = ''

    if (interviewingList.length === 0) {

        filterSection.innerHTML = `
        <div class="text-center py-16">
          <img src="./jobs.png" class="mx-auto mb-4 w-20">
          <h3 class="text-xl font-semibold">No Jobs Available</h3>
          <p class="text-gray-500">Start applying to track your applications</p>
        </div>
        `
        return
    }


    for (let job of interviewingList) {

        let div = document.createElement('div')

        div.className = 'card flex justify-between border p-8 bg-white rounded-2xl border-2 border-slate-100 px-6 py-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 animate-fadeUp mb-6'

        div.innerHTML = `
        <div class="space-y-6">

            <div>
                <p class="plantName font-syne font-bold text-navy text-base mb-0.5">${job.plantName}</p>
                <p class="latinName text-sm text-slate-500 mb-1.5">${job.position}</p>
                <p class="latinName text-sm text-slate-500 mb-1.5">${job.salary}</p>
            </div>

            <div class="flex gap-2">
                <p class="light bg-gray-200 px-5">${job.light}</p>
                <p class="water bg-gray-200 px-5">${job.water}</p>
            </div>

           <p class="status px-3 py-1 inline-block ${job.status === 'Interview' ? 'bg-gray-300 text-black' : job.status === 'Rejected' ? 'bg-red-200 text-black' : ''} rounded">${job.status}</p>
            <p class="notes">${job.notes}</p>

            <div class="flex gap-5">
     <button class="interviewing-btn font-semibold px-4 py-1.5 rounded-md border-2 text-green-500">Interview</button>
                        <button class="rejecting-btn font-semibold px-4 py-1.5 rounded-md border-2 text-red-500">Rejected</button>
            </div>

        </div>

        <div>
            <button class="btn-delete w-8"><img src="./Group 1.png"></button>
        </div>
        `

        filterSection.appendChild(div)
    }
}




function renderrejecting() {

    filterSection.innerHTML = ''

    if (rejectingList.length === 0) {

        filterSection.innerHTML = `
        <div class="text-center py-16">
          <img src="./jobs.png" class="mx-auto mb-4 w-20">
          <h3 class="text-xl font-semibold">No Jobs Available</h3>
          <p class="text-gray-500">Start applying to track your applications</p>
        </div>
        `
        return
    }


    for (let job of rejectingList) {

        let div = document.createElement('div')

        div.className = 'card flex justify-between border p-8 bg-white rounded-2xl border-2 border-slate-100 px-6 py-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 animate-fadeUp mb-6'

        div.innerHTML = `
        <div class="space-y-6">

            <div>
                <p class="plantName font-syne font-bold text-navy text-base mb-0.5">${job.plantName}</p>
                <p class="latinName text-sm text-slate-500 mb-1.5">${job.position}</p>
                <p class="latinName text-sm text-slate-500 mb-1.5">${job.salary}</p>
            </div>

            <div class="flex gap-2">
                <p class="light bg-gray-200 px-5">${job.light}</p>
                <p class="water bg-gray-200 px-5">${job.water}</p>
            </div>

            <p class="status px-3 py-1 inline-block ${job.status === 'Interview' ? 'bg-gray-300 text-black' : job.status === 'Rejected' ? 'bg-red-200 text-black' : ''} rounded">${job.status}</p>
            <p class="notes">${job.notes}</p>

            <div class="flex gap-5">
               <button class="interviewing-btn font-semibold px-4 py-1.5 rounded-md border-2 text-green-500">Interview</button>
                        <button class="rejecting-btn font-semibold px-4 py-1.5 rounded-md border-2 text-red-500">Rejected</button>
            </div>

        </div>

        <div>
            <button class="btn-delete w-8"><img src="./Group 1.png"></button>
        </div>
        `

        filterSection.appendChild(div)
    }
}