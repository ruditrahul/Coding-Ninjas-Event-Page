import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import { Row, Col } from "react-bootstrap";
import "./Cards.css";

function getMonthInWords(month) {
  switch (month) {
    case 0: {
      return "Jan";
      break;
    }
    case 1: {
      return "Feb";
      break;
    }
    case 2: {
      return "Mar";
      break;
    }
    case 3: {
      return "Apr";
      break;
    }
    case 4: {
      return "May";
      break;
    }
    case 5: {
      return "June";
      break;
    }
    case 6: {
      return "July";
      break;
    }
    case 7: {
      return "Aug";
      break;
    }
    case 8: {
      return "Sep";
      break;
    }
    case 9: {
      return "Oct";
      break;
    }
    case 10: {
      return "Nov";
      break;
    }
    case 11: {
      return "Dec";
      break;
    }
    default: {
      return "";
    }
  }
}

function Cards({ eventsData }) {
  function convertStartTime(eventTime) {
    var options = {
      time: "numeric",
    };
    const t = new Date(eventTime).toLocaleTimeString("en-US", options);

    //Eg t="06:00:00 AM"
    //Slicing the t to the desired format
    const time =
      (t.length === 11 ? t.slice(0, 5) : t.slice(0, 4)) +
      " " +
      t.slice(t.length - 2) +
      ", " +
      new Date(eventTime).getDate() +
      " " +
      getMonthInWords(new Date(eventTime).getMonth()) +
      " " +
      new Date(eventTime).getFullYear();
    return time;
  }

  function convertRegistrationEndTime(eventTime) {
    var options = {
      time: "numeric",
    };
    //Eg t="06:00:00 AM"
    //Slicing the t to the desired format
    const t = new Date(eventTime).toLocaleTimeString("en-US", options);
    const time =
      new Date(eventTime).getDate() +
      " " +
      getMonthInWords(new Date(eventTime).getMonth()) +
      ", " +
      (t.length === 11 ? t.slice(0, 5) : t.slice(0, 4)) +
      t.slice(t.length - 2);
    return time;
  }

  return (
    //eventsData is recieved as props and mapped to single small small card components
    //Using React Bootstrap to apply the grid system
    <Row className="card-row">
      {eventsData?.map((event) => (
        <Col lg={6} md={4} sm={12}>
          <Card className="card">
            <CardMedia
              className="card-media"
              image={event?.cover_picture}
              title={event?.name}
            >
              {event.registration_status === "REGISTRATIONS_OPEN" && (
                <div className="event-status">
                  <div className="event-status-container">
                    <div className="circle"></div>
                    <p
                      className="registration-status"
                      style={{ color: "black" }}
                    >
                      Registration <b>open</b> till{" "}
                      <b>
                        {convertRegistrationEndTime(
                          event.registration_end_time * 1000
                        )}
                      </b>
                    </p>
                  </div>
                </div>
              )}
            </CardMedia>
            <CardContent style={{ paddingBottom: "0px" }}>
              <div className="main">
                <Typography
                  variant="h6"
                  display="block"
                  color="textPrimary"
                  style={{ marginBottom: "7px" }}
                >
                  {event?.name}
                </Typography>
                <div className="event-info">
                  <div className="event-info-time">
                    <Typography
                      variant="body2"
                      display="block"
                      color="textSecondary"
                    >
                      Starts on
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      display="block"
                      color="textPrimary"
                    >
                      {convertStartTime(event?.event_start_time * 1000)}
                    </Typography>
                  </div>

                  <div className="event-info-price">
                    <Typography variant="body2" color="textSecondary">
                      Entry Fee
                    </Typography>
                    <Typography variant="subtitle2" color="textPrimary">
                      {event.fees === 0 ? "Free" : `INR ${event.fees}`}
                    </Typography>
                  </div>

                  <div className="event-info-venue">
                    <Typography variant="body2" color="textSecondary">
                      Venue
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      display="block"
                      color="textPrimary"
                    >
                      {event?.venue}
                    </Typography>
                  </div>
                </div>
                <Divider />

                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: "12px", color: "#616161" }}
                >
                  {event?.short_desc}
                </Typography>
                <div className="card-tags">
                  {event?.card_tags.slice(0, 3).map((tag) => (
                    <div className="tags">{tag}</div>
                  ))}
                  {event?.card_tags.length - 3 > 0 && (
                    <div className="cardTags-left">
                      +{event.card_tags.length - 3} more
                    </div>
                  )}
                </div>
              </div>
              <Divider style={{ margin: 0 }} />
            </CardContent>
            <CardActions className="footer">
              <div className="registered-user-info">
                {event?.registered_users.top_users.length !== 0 && (
                  <div className="registered-users">
                    <div className="users-avatar">
                      {event.registered_users?.top_users.map((user) => (
                        <Avatar
                          className="avatar"
                          src={user?.image_url}
                          alt={user?.name}
                        />
                      ))}
                    </div>

                    <p className="others">
                      and {event?.registered_users.other_users_count} others are
                      participating
                    </p>
                  </div>
                )}
              </div>
              <Button
                variant="contained"
                className="register-btn"
                href={`https://www.codingninjas.com/v2/events/${event?.slug}`}
              >
                {event.registration_status === "PAST" ? "View" : "Register Now"}
              </Button>
            </CardActions>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
