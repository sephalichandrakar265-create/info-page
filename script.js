let notifications = [];
let unreadCount = 0;

// Send Notification
function sendNotification(type, priority) {

    const inapp = document.getElementById("inapp").checked;

    if (!inapp) {
        alert("In-App notifications disabled by user");
        return;
    }

    const messageMap = {
        JOB_MATCH: "New job matching your skills is available",
        APPLICATION_STATUS: "Your application status has changed",
        INTERVIEW_REMINDER: "Interview scheduled for tomorrow"
    };

    const notification = {
        id: Date.now(),
        type,
        message: messageMap[type],
        priority,
        read: false,
        time: new Date().toLocaleString()
    };

    notifications.unshift(notification);
    unreadCount++;
    updateUI();
}

// Update UI
function updateUI() {
    const list = document.getElementById("notificationList");
    list.innerHTML = "";

    notifications.forEach(n => {
        const div = document.createElement("div");
        div.className = `notification ${n.priority}`;

        div.innerHTML = `
            <strong>${n.type.replace("_"," ")}</strong>
            <p>${n.message}</p>
            <small>${n.time}</small><br>
            ${!n.read ? `<button onclick="markRead(${n.id})">Mark as Read</button>` : "✔ Read"}
        `;

        list.appendChild(div);
    });

    document.getElementById("unreadCount").innerText = unreadCount;
}

// Mark as Read
function markRead(id) {
    notifications.forEach(n => {
        if (n.id === id && !n.read) {
            n.read = true;
            unreadCount--;
        }
    });
    updateUI();
}