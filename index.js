
        // Separated JavaScript code
        let userForm = document.getElementById("user-form");
        const userEntriesTableBody = document.getElementById("userEntriesTableBody");

        const retrieveEntries = () => {
            let entries = localStorage.getItem("userEntries");
            if (entries) {
                entries = JSON.parse(entries);
            } else {
                entries = [];
            }
            return entries;
        }

        let userEntries = retrieveEntries();

        const displayEntries = () => {
            userEntriesTableBody.innerHTML = ""; // Clear existing entries
            const entries = retrieveEntries();
            entries.forEach((entry) => {
                const row = document.createElement("tr");
                const nameCell = createTableCell(entry.name);
                const emailCell = createTableCell(entry.email);
                const passwordCell = createTableCell(entry.password);
                const dobCell = createTableCell(entry.dob);
                const acceptedTermsCell = createTableCell(entry.acceptedTerms ? "Yes" : "No");
                row.appendChild(nameCell);
                row.appendChild(emailCell);
                row.appendChild(passwordCell);
                row.appendChild(dobCell);
                row.appendChild(acceptedTermsCell);
                userEntriesTableBody.appendChild(row);
            });
        }

        const createTableCell = (text) => {
            const cell = document.createElement("td");
            cell.classList.add("border", "px-4", "py-2");
            cell.textContent = text;
            return cell;
        }

        const saveUserForm = (event) => {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const dob = document.getElementById("dob").value;
            const acceptedTerms = document.getElementById("accept-terms").checked;
            const entry = {
                name: name,
                email: email,
                password: password,
                dob: dob,
                acceptedTerms: acceptedTerms
            };
            userEntries.push(entry);
            localStorage.setItem("userEntries", JSON.stringify(userEntries));
            displayEntries();
        }

        userForm.addEventListener("submit", saveUserForm);
        displayEntries();

