import { Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { SingleItem } from '../Browse/SingleItem'

export const Search = () => {
const searchList=useSelector((state)=>state.search.searchResults)
console.log(searchList)
    return (
        <div 
        style={{
            minHeight:'100vh'
        }}
        >
            <Grid container >
            {searchList.map(item=>{
                return(
                    <Grid key={item._id} xs={12} sm={12} md={3} lg={2} xl={2} item>
                        <img alt="movie poster" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                    </Grid>
                )
            })}
            </Grid>
        </div>
    )
}
