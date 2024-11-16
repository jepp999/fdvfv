
document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById('progress-bar');
    const resultsModal = document.getElementById('results-modal');
    const deductionsCount = document.getElementById('deductions-count');
    const getAccessButton = document.getElementById('get-access-button');

    let currentQuestionIndex = 0;
    const totalQuestions = 5; // Replace with actual total number of questions
    let foundDeductions = 0;

    function updateProgress() {
        currentQuestionIndex++;
        foundDeductions++; // Increment deductions count (simulate logic)

        const progress = (currentQuestionIndex / totalQuestions) * 100;
        progressBar.style.width = progress + "%";

        if (currentQuestionIndex === totalQuestions) {
            showResults();
        }
    }

    function showResults() {
        deductionsCount.textContent = foundDeductions;
        resultsModal.classList.remove("hidden");
    }

    getAccessButton.addEventListener("click", () => {
        alert("Redirecting to payment...");
    });

    document.getElementById("yes-button").addEventListener("click", updateProgress);
    document.getElementById("no-button").addEventListener("click", updateProgress);
});
