import { AllArtists } from 'components/AllArtists';
import { ArtistDetails } from 'components/ArtistDetails'
import { SelectNationality } from 'components/SelectNationality';
import { SelectBirtYear } from 'components/SelectBirtYear';
import { Header } from 'components/Header';
import { Startpage } from 'components/StarterPage';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FindArtist } from 'components/FindArtist';
import { SearchArtist } from 'components/SearchArtist';
import { ArtistNationality } from 'components/ArtistNationality';
import { ArtistsBornAfter } from 'components/ArtistsBornAfter';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/artists" element={<AllArtists />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />
        <Route path="/nationality" element={<SelectNationality />} />
        <Route path="/nationality/:nationality" element={<ArtistNationality />} />
        <Route path="/born-after" element={<SelectBirtYear />} />
        <Route path="/born-after/:year" element={<ArtistsBornAfter />} />
        <Route path="/artists/name" element={<SearchArtist />} />
        <Route path="/artists/name/:name" element={<FindArtist />} />
      </Routes>
    </BrowserRouter>
  )
}
