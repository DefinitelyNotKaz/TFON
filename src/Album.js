import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const art = [
  {
    id: 1,
    alt: "Menu art for the new character",
    img: '/images/menu.png',
  },
  {
    id: 2,
    alt: "Transition art for different stages",
    img: '/images/transitions.png',
  },
  {
    id: 3,
    alt: "Character sprite",
    img: '/images/player.png',
  }
]

const active = [
    {
        "id": 1,
        "name": "Cheesecake",
        "description": "This was the first item created, it might be changed to a passive item but currently it just gives you hearts.",
        "image": "/images/cheese_cake.png",
    },{
        "id": 2,
        "name": "Powershell",
        "description": "It duplicates your familiars. Clones! Clones everywhere!",
        "image": "/images/powershell.png",
    },{
        "id": 3,
        "name": "Filtered",
        "description": "Filters (removes) all the tears and bombs from the room.",
        "image": "/images/filtered.png",
    },
    
];

const passive = [
    {
        "id": 1,
        "name": "Karaoke Microphone",
        "description": "Every enemy on the room has a chance of getting charmed or feared.",
        "image": "/images/karaoke_mic.png",
    },{
        "id": 2,
        "name": "Neuro's Cap",
        "description": "Tears now have a chance of homing.",
        "image": "/images/ai_cap.png",
    },{
        "id": 3,
        "name": "Gymbag",
        "description": "Functionality still not decided.",
        "image": "/images/gymbag.png",
    },
    
];

const familiars = [
    {
        "id": 1,
        "name": "Camila",
        "description": "Leaves a trail of yellow creep.",
        "image": "/images/camila.png",
    },{
        "id": 2,
        "name": "Vedal",
        "description": "Blocks projectiles.",
        "image": "/images/vedal.png",
    },{
        "id": 3,
        "name": "Miyune",
        "description": "Shoots blood tears.",
        "image": "/images/miyune.png",
    },
    
];

const trinkets = [
    {
        "id": 1,
        "name": "Vedal's RAM",
        "description": "Gives you shoot speed but it decreses each time you shoot. Resets when you enter a new room.",
        "image": "/images/vedals_ram.png",
    }
    
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  height: "60%",
  bgcolor: 'black',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Album() {
  const [open, setOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState("");
  const handleOpen = (type, id) => {
    setOpen(true);
    switch (type) {
      case "active":
        setModalImage(active[id-1].image);
        break;
      case "passive":
        setModalImage(passive[id-1].image);
        break;
      case "familiars":
        setModalImage(familiars[id-1].image);
        break;
      case "trinkets":
        setModalImage(trinkets[id-1].image);
        break;
      case "art":
        setModalImage(art[id-1].img);
        break;
      default:
        setModalImage("");
    }
  };
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              The Filtering of Neuro
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              A The Binding Of Isaac mod based around Neuro-sama.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h4" color="text.primary" style={{marginBottom: "15px"}}>
            Custom Stage Transitions
          </Typography>
          <ImageList sx={{ width: "100%", height: "100%", overflow: "hidden" }} cols={3} rowHeight={164}>
            {art.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => handleOpen("art", item.id)}
                />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={modalStyle} style={{"backgroundImage":`url(${modalImage})`}}>
                  </Box>
                </Modal>
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h4" color="text.primary" style={{marginBottom: "15px"}}>
            Active Items
          </Typography>
          <Grid container spacing={4}>
            {active.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => handleOpen("active", card.id)} size="small">View</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={modalStyle} style={{"backgroundImage":`url(${modalImage})`}}>
                      </Box>
                    </Modal>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h4" color="text.primary" style={{marginBottom: "15px"}}>
            Passive Items
          </Typography>
          <Grid container spacing={4}>
            {passive.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => handleOpen("passive", card.id)} size="small">View</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={modalStyle} style={{"backgroundImage":`url(${modalImage})`}}>
                      </Box>
                    </Modal>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h4" color="text.primary" style={{marginBottom: "15px"}}>
            Familiars
          </Typography>
            <Grid container spacing={4}>
                {familiars.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                    <CardMedia
                        component="img"
                        image={card.image}
                        alt={card.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                        </Typography>
                        <Typography>
                        {card.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => handleOpen("familiars", card.id)} size="small">View</Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={modalStyle} style={{"backgroundImage":`url(${modalImage})`}}>
                        </Box>
                      </Modal>
                    </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h4" color="text.primary" style={{marginBottom: "15px"}}>
            Trinkets
          </Typography>
            <Grid container spacing={4}>
                {trinkets.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                    <CardMedia
                        component="img"
                        image={card.image}
                        alt={card.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                        </Typography>
                        <Typography>
                        {card.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => handleOpen("trinket", card.id)} size="small">View</Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={modalStyle} style={{"backgroundImage":`url(${modalImage})`}}>
                        </Box>
                      </Modal>
                    </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}