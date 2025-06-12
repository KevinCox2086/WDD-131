// A variable to track the number of participants
let participantCount = 1;

// Function to return the HTML template for a new participant
const participantTemplate = (count) => `
  <section class="participant${count}">
    <p>Participant ${count}</p>
    <div class="item">
      <label for="fname${count}"> First Name<span>*</span></label>
      <input id="fname${count}" type="text" name="fname${count}" required />
    </div>
    <div class="item activities">
      <label for="activity${count}">Activity #<span>*</span></label>
      <input id="activity${count}" type="text" name="activity${count}" />
    </div>
    <div class="item">
      <label for="fee${count}">Fee ($)<span>*</span></label>
      <input id="fee${count}" type="number" name="fee${count}" />
    </div>
    <div class="item">
      <label for="date${count}">Desired Date <span>*</span></label>
      <input id="date${count}" type="date" name="date${count}" />
    </div>
    <div class="item">
      <p>Grade</p>
      <select id="grade${count}">
        <option selected value="" disabled></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  </section>
`;

// Event listener for the 'Add Participant' button
document.getElementById("add").addEventListener("click", () => {
  participantCount++;
  const addButton = document.getElementById("add");
  const newParticipantHTML = participantTemplate(participantCount);
  addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
});


// Function to handle form submission
function submitForm(event) {
  event.preventDefault();

  const feeElements = document.querySelectorAll("input[id^='fee']");
  const totalFees = Array.from(feeElements).reduce((total, input) => total + (Number(input.value) || 0), 0);
  
  const adultName = document.getElementById("adult_name").value;

  const form = document.querySelector("form");
  const summary = document.getElementById("summary");
  form.style.display = "none";
  summary.style.display = "block";

  summary.innerHTML = `Thank you ${adultName} for registering. You have registered ${participantCount} participants and owe $${totalFees.toFixed(2)} in Fees.`;
}
document.querySelector("form").addEventListener("submit", submitForm);
