const rewards = [
    "🎤 Voucher na Głupie Nagranie: Masz prawo wybrać temat, a ja muszę je nagrać!",
    "🎶 Bilet na Koncert Daniela: Prywatny koncert głosowy przez wiadomość!",
    "💌 Wiadomość do Wysłania: Możesz kazać mi napisać dowolną wiadomość do kogokolwiek.",
    "🤣 Meme Generator: Otrzymujesz 5 unikalnych memów o sobie!",
    "📖 Bajka na Dobranoc: Napiszę bajkę, w której jesteś bohaterką!",
    "👑 Tytuł Szlachecki: Od teraz jesteś Królową Serduszka Daniela!",
    "🚨 Wiadomość Ratunkowa: Możesz wymusić na mnie wiadomość, która poprawi Ci humor!",
    "🤗 Voucher na Przytulanie: Nieograniczona ilość przytulania!",
    "🤦‍♂️ Najbardziej Żenująca Historia Daniela: Opowiem Ci coś, czego nie powinienem!",
    "🎭 Prawda czy Wyzwanie: Możesz mi zadać pytanie albo wyzwanie!"
];

function openGift(index) {
    document.getElementById("rewardText").innerText = rewards[index];
    document.getElementById("rewardBox").classList.remove("hidden");
}

function closeReward() {
    document.getElementById("rewardBox").classList.add("hidden");
}
