// // script.js
// const scriptures = {
//     "John 3:16": "For God so loved the world that He gave His only Son...",
//     "Psalm 23:1": "The Lord is my shepherd; I shall not want...",
//     "Genesis 1:1": "In the beginning, God created the heavens and the earth...",
//     "Genesis 1:26": "Then God said, 'Let us make man in our image, after our likeness...",
//     "Genesis 12:2-3": "I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing...",
//     "Exodus 14:14": "The Lord will fight for you; you need only to be still...",
//     "Exodus 20:3": "You shall have no other gods before me...",
//     "Exodus 20:12": "Honor your father and your mother, so that you may live long in the land the Lord your God is giving you...",
//     "Joshua 1:9": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go...",
//     "Joshua 24:15": "But as for me and my house, we will serve the Lord...",
//     "Psalm 23:1": "The Lord is my shepherd, I shall not want...",
//     "Psalm 27:1": "The Lord is my light and my salvation—whom shall I fear?",
//     "Psalm 46:1": "God is our refuge and strength, a very present help in trouble...",
//     "Psalm 119:105": "Your word is a lamp to my feet and a light to my path...",
//     "Psalm 139:14": "I praise you, for I am fearfully and wonderfully made...",
//     "Proverbs 3:5-6": "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight...",
//     "Proverbs 18:10": "The name of the Lord is a fortified tower; the righteous run to it and are safe...",
//     "Isaiah 40:31": "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles...",
//     "Isaiah 41:10": "Fear not, for I am with you; be not dismayed, for I am your God...",
//     "Jeremiah 29:11": "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope...",
//     "Lamentations 3:22-23": "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning...",
//     "Ezekiel 36:26": "I will give you a new heart and put a new spirit within you..."
// };

// function searchScriptures() {
//     const query = document.getElementById('searchBar').value.toLowerCase();
//     const resultsDiv = document.getElementById('scriptureResults');
//     resultsDiv.innerHTML = '';

//     for (let verse in scriptures) {
//         if (verse.toLowerCase().includes(query) || scriptures[verse].toLowerCase().includes(query)) {
//             const scriptureDiv = document.createElement('div');
//             scriptureDiv.classList.add('scripture');
//             scriptureDiv.innerHTML = `<strong>${verse}</strong>: ${scriptures[verse]}`;
//             resultsDiv.appendChild(scriptureDiv);
//         }
//     }
// }


const scriptures = {
    "John 3:16": "For God so loved the world that He gave His only Son...",
    "Psalm 23:1": "The Lord is my shepherd; I shall not want...",
    "Genesis 1:1": "In the beginning, God created the heavens and the earth...",
    "Genesis 1:26": "Then God said, 'Let us make man in our image, after our likeness...",
    "Genesis 12:2-3": "I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing...",
    "Exodus 14:14": "The Lord will fight for you; you need only to be still...",
    "Exodus 20:3": "You shall have no other gods before me...",
    "Exodus 20:12": "Honor your father and your mother, so that you may live long in the land the Lord your God is giving you...",
    "Joshua 1:9": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go...",
    "Joshua 24:15": "But as for me and my house, we will serve the Lord...",
    "Psalm 27:1": "The Lord is my light and my salvation—whom shall I fear?",
    "Psalm 46:1": "God is our refuge and strength, a very present help in trouble...",
    "Psalm 119:105": "Your word is a lamp to my feet and a light to my path...",
    "Psalm 139:14": "I praise you, for I am fearfully and wonderfully made...",
    "Proverbs 3:5-6": "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight...",
    "Proverbs 18:10": "The name of the Lord is a fortified tower; the righteous run to it and are safe...",
    "Isaiah 40:31": "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles...",
    "Isaiah 41:10": "Fear not, for I am with you; be not dismayed, for I am your God...",
    "Jeremiah 29:11": "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope...",
    "Lamentations 3:22-23": "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning...",
    "Ezekiel 36:26": "I will give you a new heart and put a new spirit within you..."
};

function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function searchScriptures() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const resultsDiv = document.getElementById('scriptureResults');
    resultsDiv.innerHTML = '';

    if (!query) {
        return;
    }

    for (const verse in scriptures) {
        if (verse.toLowerCase().includes(query) || scriptures[verse].toLowerCase().includes(query)) {
            const scriptureDiv = document.createElement('div');
            scriptureDiv.classList.add('scripture');
            scriptureDiv.innerHTML = `<strong>${verse}</strong>: ${scriptures[verse]}`;
            resultsDiv.appendChild(scriptureDiv);
        }
    }
}

// Attach the debounced search function to the input event
const searchInput = document.getElementById('searchBar');
searchInput.addEventListener('input', debounce(searchScriptures, 300));
