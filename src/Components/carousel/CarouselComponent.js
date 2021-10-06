import * as React from 'react';
import Carousel from "react-multi-carousel";
import { Card, CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CarouselComponent() {
  const data = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 900
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 3,
      partialVisibilityGutter: 30
    }
  }


  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid item xs={12}>
            <Card className="wfhcard">
              <Typography variant="h6" className="wfhtitle">Work From Home Jobs</Typography>
              <Carousel
                additionalTransfrom={0}
                autoPlaySpeed={3000}
                centerMode={false}
                className="wfhcarousel"
                itemClass="wfhitem"
                draggable
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                responsive={data}
                slidesToSlide={1}
                swipeable
              ><Card className="wfhcards">
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Quess IT Staffing
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Supply chain Advisor <br />
                      Experience: 0-0 Years<br />
                      Location(s): Bengaluru/Bangalore
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="wfhcards">
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Company Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      RPA Developer Role <br />
                      Experience: 2-4 Years <br />
                      Location(s): Bengaluru/Bangalore
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="wfhcards">
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Company Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      RPA Developer Role <br />
                      Experience:2-4 Years <br />
                      Location(s): Bengaluru/Bangalore
                    </Typography>
                  </CardContent>
                </Card>
              </Carousel>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className="wfhcard">
              <Typography variant="h6" className="wfhtitle">Recent Jobs</Typography>
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="wfhcarousel"
                itemClass="wfhitem"
                draggable
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                responsive={data}
                slidesToSlide={1}
                swipeable
              ><Card className="wfhcards">
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Quess IT Staffing
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Supply chain Advisor <br />
                      Experience: 0-0 Years<br />
                      Location(s): Bengaluru/Bangalore
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="wfhcards">
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Company Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      RPA Developer Role <br />
                      Experience: 2-4 Years <br />
                      Location(s): Bengaluru/Bangalore
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="wfhcards">
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Company Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      RPA Developer Role <br />
                      Experience: 2-4 Years <br />
                      Location(s): Bengaluru/Bangalore
                    </Typography>
                  </CardContent>
                </Card>
              </Carousel>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Router>
            <Card className="top">
              <List
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  bgcolor: 'background.paper',
                }}
              >
                 <Typography variant="h6" className="wfhtitle">Jobs by Top skills</Typography>
                <Divider component="li" />
                <li>
                  <Typography variant="h8"
                    sx={{ mt: 0.5, ml: 2 }}
                    display="flex"
                  >
                    Accounting Jobs <br />
                    Analytical Jobs <br />
                    Animation Jobs <br />
                    Architecture Jobs <br />
                    Banking Jobs <br />
                    BPO Jobs <br />
                    Data Science Jobs <br />
                    Java Jobs <br />
                    Marketing jobs <br />
                    Mechanical Engineering Jobs <br />
                    Networking jobs <br />
                  </Typography>
                </li>
                <div className="view">
                 <Router>
                 <Link href="#" style={{underline:"none"}}>View all</Link>
                 </Router>
                </div>
              </List>
            </Card>
          </Router>
        </Grid>
      </Grid>
    </>
  )
}

