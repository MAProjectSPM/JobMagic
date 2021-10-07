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
  const listitem = [
    {item: "Accounting Jobs"},
    {item: "Analytical Jobs"},
    {item: "Animation Jobs"},
    {item: "Architecture Jobs"},
    {item: "Banking Jobs"},
    {item: "BPO Jobs"},
    {item: "Data Science Jobs"},
    {item: "Java Jobs"},
    {item: "Marketing Jobs"},
    {item: "Networking Jobs"},
  ]


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
                    <Typography gutterBottom fontWeight="550"  component="div">
                      Quess IT Staffing
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Supply chain Advisor <br />
                      Experience: 0-0 Years<br />
                      Location(s): Bangalore
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="wfhcards">
                  <CardContent>
                    <Typography gutterBottom fontWeight="550" component="div">
                      Company Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      RPA Developer Role <br />
                      Experience: 2-4 Years <br />
                      Location(s): Bangalore
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="wfhcards">
                  <CardContent>
                    <Typography gutterBottom fontWeight="550" component="div">
                      Company Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      RPA Developer Role <br />
                      Experience:2-4 Years <br />
                      Location(s): Bangalore
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
                    <Typography gutterBottom fontWeight="550"  component="div">
                      Quess IT Staffing
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Supply chain Advisor <br />
                      Experience: 0-0 Years<br />
                      Location(s): Bangalore
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="wfhcards">
                  <CardContent>
                    <Typography gutterBottom fontWeight="550"  component="div">
                      Infosys
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      RPA Developer Role <br />
                      Experience: 2-4 Years <br />
                      Location(s): Bangalore
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="wfhcards">
                  <CardContent>
                    <Typography gutterBottom fontWeight="550" component="div">
                      TCS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      RPA Developer Role <br />
                      Experience: 2-4 Years <br />
                      Location(s): Bangalore
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
                <Typography variant="h6" className="listtitle">Jobs by Top skills</Typography>
                <Divider/>
                <ListItem>
                  <Link className="listitems">Accounting Jobs</Link>
                </ListItem>
                <ListItem>
                  <Link className="listitems">Analytical Jobs</Link>
                </ListItem>
                <ListItem>
                  <Link className="listitems">Animation Jobs</Link>
                </ListItem>
                <ListItem>
                  <Link className="listitems">Architecture Jobs</Link>
                </ListItem>
                <ListItem>
                  <Link className="listitems">Banking Jobs</Link>
                </ListItem>
                <ListItem>
                  <Link className="listitems">BPO Jobs</Link>
                </ListItem>
                <ListItem>
                  <Link className="listitems">Data Science Jobs</Link>
                </ListItem>
                <ListItem>
                  <Link className="listitems">Java Jobs</Link>
                </ListItem>
                <ListItem>
                  <Link className="listitems">Marketing Jobs</Link>
                </ListItem>
                <ListItem>
                  <Link className="listitems">Mechnical Engineering Jobs</Link>
                </ListItem>                
                <ListItem>
                  <Link className="listitems">Networking Jobs</Link>
                </ListItem>
                 <Router>
                 <Link href="#" className="viewall">View all &gt;</Link>
                 </Router>
              </List>
            </Card>
          </Router>
        </Grid>
      </Grid>
    </>
  )
}

