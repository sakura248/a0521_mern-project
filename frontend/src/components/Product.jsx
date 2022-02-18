import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { v4 as uuidv4 } from "uuid";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Typography,
} from "@mui/material";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function Product() {
  const [userContext] = useContext(UserContext);
  const [list, setList] = useState([]);
  let itemsFromList = {};

  const { v4: uuidv4 } = require("uuid");

  const token = userContext.token;
  const navigate = useNavigate();

  const [errorText, setErrorText] = useState("");
  const url = process.env.REACT_APP_API_ENDPOINT + "/api/products/";

  // const editProduct = async (id) => {
  //   console.log("test");
  // };

  const deleteProduct = async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios.delete(url + id, config);
    } catch (err) {
      console.log(err.response);
    }
    navigate("/Products");
    // .then(async (res) => {
    //   console.log(res);
    //   if (!res.ok) {
    //     console.log("login test");
    //     if (res.status === 400) {
    //       setErrorText("Missing Credential");
    //     } else if (res.status === 401) {
    //       setErrorText("Invalid email and/or password");
    //     }
    //     // else {
    //     //   setErrorText("Something went wrong! Please try again");
    //     // }
    //   } else {
    //     const data = await res.json();
    //     setUserContext((prev) => ({ ...prev, token: data.token }));
    //     navigate("/");
    //     console.log("login success");
    //   }
    // })
    // .catch((error) => {
    //   window.alert(error);
    //   return;
    // });
  };

  useEffect(() => {
    async function fetch() {
      if (!token) {
        navigate("/Login");
      }
      const getProducts = async (token) => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(url, config);
        return response.data;
      };
      const data = await getProducts(token);
      if (data.statusText !== "OK") {
        if (data.status === 400) {
          setErrorText("Missing Credential");
        } else if (data.status === 401) {
          setErrorText("Invalid email and/or password");
        }
        // else {
        //   setErrorText("Something went wrong! Please try again");
        // }
      }
      setList(data);
      // console.log(list);

      // .catch((error) => {
      //   window.alert(error);
      //   return;
      // });
    }

    fetch();
  }, [navigate, token, url]);
  // console.log(list);

  itemsFromList = {
    [uuidv4()]: {
      name: "Your Product List",
      items: list,
    },
    [uuidv4()]: {
      name: "AM",
      items: [],
    },
    [uuidv4()]: {
      name: "AM and PM",
      items: [],
    },
    [uuidv4()]: {
      name: "PM",
      items: [],
    },
  };

  const handleDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      console.log(column);
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  useEffect(() => {
    setColumns(itemsFromList);
  }, [list]);

  console.log("itemsFromList", itemsFromList);
  const [columns, setColumns] = useState(itemsFromList);
  console.log("columns", columns);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        flexDirection: "row",
      }}
    >
      <DragDropContext
        onDragEnd={(result) => handleDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <List key={columnId} sx={{ boxShadow: 1, m: 2 }}>
              <Typography variant="h5" sx={{ margin: 2 }}>
                {column.name}
              </Typography>
              <div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item._id}
                              draggableId={item._id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <ListItem
                                    sx={{
                                      flexDirection: "row",
                                      justifyContent: "flex-start",
                                    }}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <ListItemText sx={{ flexDirection: "row" }}>
                                      {item.product}
                                    </ListItemText>
                                    <IconButton
                                      type="submit"
                                      onClick={() => deleteProduct(item._id)}
                                    >
                                      <HighlightOffIcon />
                                    </IconButton>
                                  </ListItem>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </List>
          );
        })}
      </DragDropContext>
      {!list && <h3>There is no product</h3>}

      {errorText && <p>{errorText}</p>}
    </Box>
  );
}

export default Product;
