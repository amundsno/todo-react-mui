import { useListStore } from "@/features/listStore";
import { useEffect, useRef, type ReactNode } from "react";
import { useNavigate, useParams } from "react-router";

export default function ListStoreRedirectGuard({
  children,
}: {
  children: ReactNode;
}) {
  const { listId } = useParams();
  const navigate = useNavigate();
  const { lists, newList } = useListStore();

  // Reason: Lock to avoid creating more than one list on initialization.
  //
  // Why:
  // useEffect() runs once after the initial mount. If the list is empty,
  // we create a new item, which updates the store and triggers a re-render.
  // Because 'lists' is a dependency, useEffect() runs again.
  //
  // Due to async timing and possible batching of updates, 'lists' may still appear empty
  // during the second run, even though a new item was just added.
  // Without a lock, this could cause multiple items to be added before the list updates,
  // leading to unwanted duplicates or render loops.
  //
  // useRef() is used as a lock because its value persists between renders
  // but changing it does *not* trigger a re-render.
  // This makes it useful for guarding this one-time initialization logic.
  const isInitializing = useRef(false);

  useEffect(() => {
    if (!isInitializing.current) {
      // Reason: Keep at least one todo list in store
      if (lists.length === 0) {
        isInitializing.current = true;
        const list = newList();
        navigate(`/lists/${list.id}`, { replace: true });
        return;
      }

      // Reason: Always redirect to a valid todo list
      if (!listId || !lists.some((list) => list.id === listId))
        navigate(`/lists/${lists[0].id}`, { replace: true });
    } else if (lists.length > 0) {
      // Reason: Reset the initializing lock
      isInitializing.current = false;
    }
  }, [listId, lists, navigate, newList]);

  return <>{children}</>;
}
