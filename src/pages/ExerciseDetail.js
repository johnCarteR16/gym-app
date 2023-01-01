import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { youtubeOptions ,exerciseOptions, fetchData } from '../util/fetchData'
import { Detail } from '../components/Detail'
import { ExerciseVideos } from '../components/ExerciseVideos'
import { SimilarExercises } from '../components/SimilarExercises'

export const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState({});
    const [targetMuscleExercise, setTargetMuscleExercise] = useState({});
    const [equipmentExercise, setEquipmentExercise] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async() => {
            const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`;
            const youtubeSearchUrl = `https://youtube138.p.rapidapi.com`;

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

            setExerciseDetail(exerciseDetailData);

            const exercseVideoData = await fetchData(`${youtubeSearchUrl}/search/?q=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exercseVideoData.contents);

            const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercise(targetMuscleExerciseData)

            const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercise(equipmentExerciseData);

        }

        fetchExercisesData();
    },[id]);

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercise={targetMuscleExercise} equipmentExercise={equipmentExercise} />
        </Box>
    )
}
