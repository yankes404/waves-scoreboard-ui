const setInfo = (data) => {
    const pdCount = document.getElementById('lspd-count');
    const emsCount = document.getElementById('ems-count');
    const lscCount = document.getElementById('lsc-count');

    const playerJob = document.getElementById('player-job');

    pdCount.innerText = data.pdCount;
    emsCount.innerText = data.emsCount;
    lscCount.innerText = data.lscCount;

    playerJob.innerText = data.playerJob;
}

const scoreboard = document.getElementById('scoreboard');

setInterval(() => {
    const info = { pdCount: 14, emsCount: 7, lscCount: 11, playerJob: 'LSPD' }; // There put your api endpoint to get info
    setInfo(info);
});

window.addEventListener('keydown', (e) => {
    if(e.key === 'z') scoreboard.classList.remove('unshowed');
})

window.addEventListener('keyup', (e) => {
    if(e.key === 'z') scoreboard.classList.add('unshowed');
})