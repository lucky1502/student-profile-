const profiles = [
    { name: "Riya Sharma", icon: "fa-user-circle", photo: "https://www.bing.com/th/id/OIP.os7uM5TJXlUufJbHt9t7UAHaHa?w=194&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", department: "Computer Science", year: "3rd Year", email: "riya@example.com", section: "A", phone: "123456789" },
    { name: "Rahul Smith", icon: "fa-user-circle", photo: "https://th.bing.com/th/id/OIP.8omrKu77YVOplUqj4Yl91wHaE7?w=278&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", department: "Mechanical", year: "2nd Year", email: "rahul@example.com", section: "B", phone: "987654321" },
    { name: "Mahesh Dhanchi", icon: "fa-user-circle", photo: "https://img.freepik.com/premium-photo/indian-man-office-smiling-suit_665346-124785.jpg?w=2000", department: "Civil", year: "4th Year", email: "mahesh@example.com", section: "C", phone: "555666777" },
    { name: "Lokesh Maheshwari", icon: "fa-user-circle", photo: "https://th.bing.com/th/id/OIP.RFEm0W7gArHDrxGjSvgSigHaHa?w=194&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", department: "Electrical", year: "1st Year", email: "lokesh@example.com", section: "A", phone: "444555666" },
    { name: "Janvi Kapoor", icon: "fa-user-circle", photo: "https://th.bing.com/th/id/OIP.XxUwj-UDdQd8i_kGOT4okAHaE8?w=299&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", department: "IT", year: "3rd Year", email: "janvi@example.com", section: "B", phone: "333444555" },
    { name: "Manas Vyas", icon: "fa-user-circle", photo: "https://th.bing.com/th/id/OIP.HuUVTgU8Hn0iPTuzYyPLNQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", department: "Electronics", year: "2nd Year", email: "manas@example.com", section: "C", phone: "222333444" },
    { name: "Kartik Suthar", icon: "fa-user-circle", photo: "https://th.bing.com/th/id/OIP.jUDlPGWM8bRQP1eK_mKWSQHaFU?w=284&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7", department: "Architecture", year: "4th Year", email: "kartik@example.com", section: "A", phone: "111222333" },
    { name: "Ram Singh", icon: "fa-user-circle", photo: "https://th.bing.com/th/id/OIP.o-DZwBZoDXABtDfrcfTHUQHaHI?w=206&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7", department: "Chemical", year: "1st Year", email: "ram@example.com", section: "B", phone: "888999000" },
    { name: "James Taylor", icon: "fa-user-circle", photo: "https://th.bing.com/th/id/OIP.Ir31nRT7lfY0caGpkbec3gHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", department: "Biotech", year: "3rd Year", email: "james@example.com", section: "C", phone: "777888999" },
    { name: "Sagar Jai", icon: "fa-user-circle", photo: "https://th.bing.com/th/id/OIP.XfA7DBZsgLWbXLan53uVRQHaE8?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", department: "AI & ML", year: "2nd Year", email: "sagar@example.com", section: "A", phone: "666777888" },
    { name: "Geeta Rao", icon: "fa-user-circle", photo: "https://th.bing.com/th/id/OIP.0VHL2W2fCZBgET6_2GgyJwHaLH?w=128&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7", department: "Data Science", year: "4th Year", email: "geeta@example.com", section: "B", phone: "555666777" },
    { name: "Harshita Singh", icon: "fa-user-circle", photo: "https://th.bing.com/th/id/OIP.E-Ll0LNMWBzH9iAH1JM07AAAAA?w=251&h=169&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", department: "Robotics", year: "1st Year", email: "harshita@example.com", section: "C", phone: "444555666" },
    { name: "Tusar Kapoor", icon: "fa-user-circle", photo: "https://th.bing.com/th/id/OIP.0nYen4-8fESoAdtqeNk_EAHaLJ?w=186&h=281&c=7&r=0&o=5&dpr=1.3&pid=1.7", department: "Cyber Security", year: "3rd Year", email: "tusar@example.com", section: "A", phone: "333444555" },
    { name: "Mika Singh", icon: "fa-user-circle", photo: "https://th.bing.com/th/id/OIP.hKRPrPwcosMYCTYLEkf2YwHaE8?w=186&h=124&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", department: "Game Dev", year: "2nd Year", email: "mika@example.com", section: "B", phone: "222333444" },
    { name: "Ethan", icon: "fa-user-circle", photo: "https://th.bing.com/th/id/OIP.uNMUtpjTKQSSTg8W9sedngAAAA?w=186&h=280&c=7&r=0&o=5&dpr=1.3&pid=1.7", department: "Mathematics", year: "4th Year", email: "ethan@example.com", section: "C", phone: "111222333" },
];


// Left panel profile list
const profileList = document.getElementById("profile-list");
profiles.forEach((profile) => {
    const div = document.createElement("div");
    div.classList.add("profile-item");
    div.innerHTML = `<i class="fa-solid ${profile.icon}"></i><p>${profile.name}</p>`;
    div.onclick = () => showProfile(profile);
    profileList.appendChild(div);
});

// Show profile in right panel
function showProfile(profile) {
    const details = document.getElementById("profile-details");
    details.innerHTML = `
        <i class="fa-solid ${profile.icon}" style="font-size:50px; color:#333;"></i>
        <h2>${profile.name}</h2>
        <img class="profile-photo" src="${profile.photo}" alt="${profile.name}">
        <p><strong>Email:</strong> ${profile.email}</p>
        <p><strong>Department:</strong> ${profile.department}</p>
        <p><strong>Year:</strong> ${profile.year}</p>
        <p><strong>Section:</strong> ${profile.section}</p>
        <button class="call-btn" onclick="alert('Calling ${profile.phone}')">Call</button>
        <button class="msg-btn" onclick="alert('Messaging ${profile.name}')">Message</button>
    `;
}

