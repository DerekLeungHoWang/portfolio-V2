import { Chip, Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
export const getChipColor = (tag) => {
    let primaryList = ["React"];
    let greenList = ["Node.JS", "Spring Boot"];
    let secondaryList = ["Mongo", "MySQL"];
    if (primaryList.includes(tag)) {
      return "primary";
    }
    if (secondaryList.includes(tag)) {
      return "secondary";
    }
    if (greenList.includes(tag)) {
      return "success";
    }

    return "warning"
  };
export default function TagFilter({ data, selectedTags, setSelectedTags }) {
  const tags = data.map((d) => d.tags);
  const tagsSet = new Set();
  tags.forEach((tagArray) => {
    tagArray.forEach((tag) => tagsSet.add(tag));
  });

  let allTags = Array.from(tagsSet);

  const handleClick = (e) => {
    let label = e.currentTarget.innerText;
    let newSelectedTags = [...selectedTags];
    if (!newSelectedTags.includes(label)) newSelectedTags.push(label);
    setSelectedTags(newSelectedTags);
  };
  const handleDelete = (label) => {
    // let label = e.target.innerText;
    // console.log("del",label);
    console.log(label);
    let newSelectedTags = [...selectedTags];

    newSelectedTags = newSelectedTags.filter((t) => t !== label);

    setSelectedTags(newSelectedTags);
  };

  

  return (
    <Container maxWidth={false} >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography>Filter By Tags:</Typography>
        <Stack direction="row" spacing={1}>
          {allTags.sort().map((tag) => (
            <Chip
              key={tag}
              clickable={true}
              onClick={handleClick}
              deleteIcon={selectedTags.includes(tag) ? null : <></>}
              onDelete={() => handleDelete(tag)}
              color={getChipColor(tag)}
              variant={selectedTags.includes(tag) ? "contained" : "outlined"}
              label={tag}
            ></Chip>
          ))}
        </Stack>
      </Grid>
    </Container>
  );
}
