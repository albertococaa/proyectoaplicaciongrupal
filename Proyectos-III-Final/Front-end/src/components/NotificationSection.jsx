"use client"
import { React, useState, useRef } from 'react'
import NotificationCard from './notificationCard'
import { PedirNotificaciones } from '../app/calls/notifications'
//si esto no funciona hacer "npm install date-fns"
import { formatDistance, subDays } from 'date-fns';


const handlePedirNotificaciones = (e) => {
  e.preventDefault();

  PedirNotificaciones();
}
const notificationsDataCall = [
  //Sam do it
]

const notificationsData = [
  {
    id: "Recordatorio",
    description: "This is a description of project 1",
    imgUrl: "/1.png",
    tag: ["All", "React"],
    date: "2023-04-25"
  },
  {
    id: "Mensaje",
    description: "This is a description of project 2",
    imgUrl: "/2.png",
    tag: ["All", "React"],
    date: "2023-04-25"
  },
  {
    id: "Actividad",
    description: "This is a description of project 3",
    imgUrl: "/3.png",
    tag: ["All", "React"],
    date: "2023-04-25"
  },
  // {
  //     id: 4,
  //     description: "This is a description of project 4",
  //     imgUrl: "/4.png",
  //     tag: ["All", "React"],
  //     date: "2023-04-25"
  // },
  // {
  //     id: 5,
  //     description: "This is a description of project 5",
  //     imgUrl: "/5.png",
  //     tag: ["All", "React"],
  //     date: "2023-04-25"
  // },
  // {
  //     id: 6,
  //     description: "This is a description of project 6",
  //     imgUrl: "/6.png",
  //     tag: ["All", "React"],
  //     date: "2023-04-25"
  // },
]

const today = new Date();
const filteredProjects = notificationsData.map(project => ({
  ...project, timeAgo: formatDistance(new Date(project.date), today, { addSuffix: true })
})).sort((a, b) => new Date(b.date) - new Date(a.date));

const NotificationSection = () => {
  return (
    <div>
      {filteredProjects.map((project) => (
        <NotificationCard id={getKey(project.id)} description={project.description} imgUrl={project.imgUrl} date={getLabel(project.date)} />
      ))}
    </div>
  );
};

const getLabel = (date) => {
  const daysAgo = (today - new Date(date)) / (1000 * 3600 * 24);
  if (daysAgo <= 1) {
    return "Hoy";
  } else if (daysAgo <= 7) {
    return "Esta semana";
  } else if (daysAgo <= 30) {
    return "Este mes";
  }else if (daysAgo <= 365) {
    return "Este año";
  }else if (daysAgo > 365) {
    return "Hace mucho";
  }
  return "Error al recoger la fecha";
};

const getKey = (key) => {
console.log(key);
return key;
}

export default NotificationSection