import React, { Component } from "react";
import MediaQuery from "react-responsive";
import moment from "moment-timezone";

import EventScheduleCompressedTable from "./EventScheduleCompressedTable";
import EventScheduleFullSizeTable from "./EventScheduleFullSizeTable";
import ContentWrapper from "./ContentWrapper";
import DaySwitcher from "./DaySwitcher";

moment.tz.setDefault("America/Kingston");

// duration in minutes, startDate as ISO 8601
const schedule = [
  {
    startDate: "2019-02-01T17:30:00",
    eventName: "Busses arrive",
    location: "Kingston Hall"
  },
  {
    startDate: "2019-02-01T17:30:00",
    endDate: "2019-02-01T19:00:00",
    eventName: "Registration & Dinner | Ali Baba",
    subtitle: "Sponsored by Tucows",
    location: "Kingston Hall Rm 200, 201, 204, 205, 213"
  },
  {
    startDate: "2019-02-01T19:30:00",
    endDate: "2019-02-01T21:30:00",
    eventName: "Opening Ceremonies",
    location: "Grant Hall"
  },
  {
    startDate: "2019-02-01T21:45:00",
    endDate: "2019-02-01T22:30:00",
    eventName: "Team Formation & Setup",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-01T22:00:00",
    eventName: "Hacking Begins!",
    location: "LinQ Lab and Engineering Active Learning Rooms - Mitchell Hall"
  },
  {
    startDate: "2019-02-01T23:00:00",
    endDate: "2019-02-01T23:45:00",
    eventName: "Workshop | Please Build Things It's Good For You",
    subtitle: "Ivan Zhang",
    location: "DDQIC Event Commons"
  }
];

const eventDays = [];

for (const event of schedule) {
  const start = moment(event.startDate).format("YYYY-MM-DD");
  if (!eventDays.includes(start)) {
    eventDays.push(start);
  }
}

eventDays.sort((a, b) => {
  return (
    moment(a, "YYYY-MM-DD").format("X") - moment(b, "YYYY-MM-DD").format("X")
  );
});

class EventSchedule extends Component {
  state = {
    selectedDay: eventDays[0]
  };

  addDurations(events) {
    return events.map((item) => {
      if (!item.endDate) {
        return item;
      }
      let duration = moment(item.endDate).diff(item.startDate, "minutes", true);
      if (duration > 59) {
        duration = Math.round((duration / 60) * 100) / 100;
        item.duration = `${duration} hr`;
      } else {
        item.duration = `${duration} min`;
      }
      return duration !== 1 ? { ...item, duration: `${item.duration}s` } : item;
    });
  }

  changeDay(selectedDay) {
    this.setState({ selectedDay });
  }

  render() {
    const eventsOnSelectedDay = schedule.filter(
      (item) =>
        (moment(item.startDate).format("YYYY-MM-DD") ===
          this.state.selectedDay &&
          Number(moment(item.startDate).format("H")) > 5) ||
        (moment(item.startDate)
          .subtract("days", 1)
          .format("YYYY-MM-DD") === this.state.selectedDay &&
          Number(moment(item.startDate).format("H")) <= 5)
    );

    const data = this.addDurations(eventsOnSelectedDay);

    return (
      <ContentWrapper>
        <section
          id="schedule"
          css={{
            padding: "110px 0 50px 0",
            margin: "0 auto"
          }}
        >
          <h1
            css={{
              textAlign: "center",
              position: "relative",
              zIndex: 2
            }}
          >
            Event Schedule
          </h1>
          <DaySwitcher
            days={eventDays}
            changeDay={(day) => this.changeDay(day)}
          />
          <h3
            css={{
              textTransform: "uppercase",
              color: "#00205b",
              marginLeft: "16px",
              "@media(max-width: 760px)": { marginLeft: 0 },
              fontWeight: 800
            }}
          >
            {moment(this.state.selectedDay, "YYYY-MM-DD").format(
              "dddd, MMMM Do, YYYY"
            )}
          </h3>
          <MediaQuery query="screen and (min-width: 760px)">
            <EventScheduleFullSizeTable data={data} />
          </MediaQuery>
          <MediaQuery query="screen and (max-width: 760px)">
            <EventScheduleCompressedTable data={data} />
          </MediaQuery>
        </section>
      </ContentWrapper>
    );
  }
}

export default EventSchedule;
