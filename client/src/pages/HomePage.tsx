import AnimatedPage from '../animation/AnimationPage';
import MainContent from '../components/Main/effects/MainContent';

const HomePage = () => {
  return (
    <div>
      <AnimatedPage>
        <div className="grid grid-cols-12 min-h-screen">
          <div className="col-span-8">
            <MainContent />
          </div>
          <div className="col-span-4">
            This is sidebar
          </div>
        </div>
      </AnimatedPage>
    </div>
  )
}

export default HomePage;