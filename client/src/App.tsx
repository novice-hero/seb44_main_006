import ContensCard from './components/ui/cards/ContentsCard';
import LocationCard from './components/ui/cards/LocationCard';
import MapLocationCard from './components/ui/cards/MapLocationCard';

const App = () => {
  return (
    <>
      <LocationCard
        title="장생당 약국"
        category="약국"
        address="서울 강남구 테헤란로84길 17"
        phone="02-558-5476"
      />
      <MapLocationCard indexNum={1} location="구림 빌라" />
      <MapLocationCard indexNum={2} location="구림 11" />
      <MapLocationCard indexNum={3} location="제발.." />
    </>
  );
};

export default App;
