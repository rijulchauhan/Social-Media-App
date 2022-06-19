export function fetchCall(url) {
    return fetch(url)
        .then(response => response.json())
}