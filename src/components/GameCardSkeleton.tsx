import {
	Card,
	CardBody,
	Heading,
	HStack,
	Skeleton,
	SkeletonText,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameCardSkeleton = () => {
	return (
		<Card>
			<Skeleton height="200px"></Skeleton>
			<CardBody>
				<SkeletonText></SkeletonText>
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
